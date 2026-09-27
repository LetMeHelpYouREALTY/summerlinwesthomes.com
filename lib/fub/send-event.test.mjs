import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildFollowUpBossEventBody,
  sendFollowUpBossEvent,
  splitFullName,
  validateContactPayload,
} from './send-event.ts';

test('validateContactPayload rejects empty body', () => {
  const result = validateContactPayload({});
  assert.equal(result.success, false);
  if (!result.success) {
    assert.match(result.error, /Name/i);
  }
});

test('splitFullName splits on first space', () => {
  assert.deepEqual(splitFullName('Jan Duffy'), {
    firstName: 'Jan',
    lastName: 'Duffy',
  });
});

test('buildFollowUpBossEventBody includes property details in message', () => {
  const body = buildFollowUpBossEventBody({
    name: 'Test User',
    email: 'test@example.com',
    formName: 'Home Valuation',
    type: 'Seller Inquiry',
    sourceUrl: 'https://www.summerlinwesthomes.com/home-valuation',
    address: '123 Main St',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '89135',
    propertyType: 'single-family',
  });
  assert.equal(body.type, 'Seller Inquiry');
  assert.match(body.message, /123 Main St/);
  assert.equal(body.person.emails[0].value, 'test@example.com');
});

test('sendFollowUpBossEvent posts to FUB with Basic auth', async () => {
  let capturedUrl;
  let capturedInit;
  const mockFetch = async (url, init) => {
    capturedUrl = url;
    capturedInit = init;
    return new Response('', { status: 201 });
  };

  const result = await sendFollowUpBossEvent(
    {
      name: 'Lead Name',
      email: 'lead@example.com',
      formName: 'Sell Your Home',
      type: 'Seller Inquiry',
      sourceUrl: 'https://www.summerlinwesthomes.com/sell-your-home',
    },
    'test-api-key',
    mockFetch,
  );

  assert.equal(result.ok, true);
  assert.equal(capturedUrl, 'https://api.followupboss.com/v1/events');
  assert.equal(capturedInit.method, 'POST');
  assert.match(capturedInit.headers.Authorization, /^Basic /);
  assert.equal(capturedInit.headers['X-System'], 'summerlinwesthomes.com');
});
