// Facebook Conversions API Server-Side Utilities
import crypto from 'crypto';

export interface FacebookEventData {
  event_name: string;
  event_time: number;
  user_data: {
    external_id?: string;
    email?: string;
    phone?: string;
    client_ip_address?: string;
    client_user_agent?: string;
    fbp?: string;
    fbc?: string;
    subscription_id?: string;
    fb_login_id?: string;
    lead_id?: string;
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: string;
  };
  custom_data?: {
    content_name?: string;
    content_category?: string;
    content_type?: string;
    value?: number;
    currency?: string;
    predicted_ltv?: number;
    num_items?: number;
    content_ids?: string[];
    contents?: Array<{
      id: string;
      quantity: number;
      delivery_category?: string;
    }>;
    order_id?: string;
    status?: string;
    search_string?: string;
    [key: string]: any;
  };
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
  opt_out?: boolean;
  event_id?: string;
  data_processing_options?: string[];
  data_processing_options_country?: number;
  data_processing_options_state?: number;
}

export interface FacebookConversionsPayload {
  data: FacebookEventData[];
  test_event_code?: string;
  partner_agent?: string;
  namespace_id?: string;
  upload_id?: string;
  upload_tag?: string;
  upload_source?: string;
}

// Hash user data for privacy
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Process user data for GDPR compliance
export function processUserData(rawUserData: any) {
  const processedData: any = {};
  
  if (rawUserData.email) {
    processedData.em = hashData(rawUserData.email);
  }
  
  if (rawUserData.phone) {
    // Remove all non-digit characters and hash
    const cleanPhone = rawUserData.phone.replace(/[^\d]/g, '');
    processedData.ph = hashData(cleanPhone);
  }
  
  if (rawUserData.firstName) {
    processedData.fn = hashData(rawUserData.firstName);
  }
  
  if (rawUserData.lastName) {
    processedData.ln = hashData(rawUserData.lastName);
  }
  
  if (rawUserData.city) {
    processedData.ct = hashData(rawUserData.city);
  }
  
  if (rawUserData.state) {
    processedData.st = hashData(rawUserData.state);
  }
  
  if (rawUserData.country) {
    processedData.country = hashData(rawUserData.country);
  }
  
  if (rawUserData.zipCode) {
    processedData.zp = hashData(rawUserData.zipCode);
  }
  
  if (rawUserData.dateOfBirth) {
    processedData.db = hashData(rawUserData.dateOfBirth);
  }
  
  // Non-PII data doesn't need hashing
  if (rawUserData.external_id) {
    processedData.external_id = rawUserData.external_id;
  }
  
  if (rawUserData.client_ip_address) {
    processedData.client_ip_address = rawUserData.client_ip_address;
  }
  
  if (rawUserData.client_user_agent) {
    processedData.client_user_agent = rawUserData.client_user_agent;
  }
  
  if (rawUserData.fbp) {
    processedData.fbp = rawUserData.fbp;
  }
  
  if (rawUserData.fbc) {
    processedData.fbc = rawUserData.fbc;
  }
  
  return processedData;
}

// Send event to Facebook Conversions API
export async function sendFacebookEvent(eventData: FacebookEventData): Promise<boolean> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSIONS_API_ACCESS_TOKEN;
  
  if (!pixelId || !accessToken) {
    console.error('Facebook Pixel ID or Access Token not configured');
    return false;
  }
  
  const payload: FacebookConversionsPayload = {
    data: [eventData],
    partner_agent: 'escola-dons-website-v1.0'
  };
  
  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(payload)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('Facebook event sent successfully:', result);
      return true;
    } else {
      console.error('Facebook event failed:', result);
      return false;
    }
  } catch (error) {
    console.error('Error sending Facebook event:', error);
    return false;
  }
}

// Predefined events for Escola de Dons
export const FacebookEvents = {
  // Page view with enhanced data
  pageView: (userData: any, customData: any = {}): FacebookEventData => ({
    event_name: 'PageView',
    event_time: Math.floor(Date.now() / 1000),
    user_data: processUserData(userData),
    custom_data: {
      content_name: 'Escola de Dons Espirituais - Landing Page',
      content_category: 'Educação Religiosa',
      content_type: 'product',
      value: 497.00,
      currency: 'BRL',
      ...customData
    },
    action_source: 'website',
    event_id: `pageview_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }),
  
  // When user clicks CTA buttons
  initiateCheckout: (userData: any, customData: any = {}): FacebookEventData => ({
    event_name: 'InitiateCheckout',
    event_time: Math.floor(Date.now() / 1000),
    user_data: processUserData(userData),
    custom_data: {
      content_name: 'Escola de Dons Espirituais',
      content_category: 'Curso Online',
      content_type: 'product',
      value: 497.00,
      currency: 'BRL',
      num_items: 1,
      content_ids: ['escola-dons-curso'],
      ...customData
    },
    action_source: 'website',
    event_id: `checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }),
  
  // When user shows high engagement
  lead: (userData: any, customData: any = {}): FacebookEventData => ({
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    user_data: processUserData(userData),
    custom_data: {
      content_name: 'Escola de Dons Espirituais',
      content_category: 'Educação Religiosa',
      value: 497.00,
      currency: 'BRL',
      ...customData
    },
    action_source: 'website',
    event_id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }),
  
  // Custom event for pricing view
  viewContent: (userData: any, customData: any = {}): FacebookEventData => ({
    event_name: 'ViewContent',
    event_time: Math.floor(Date.now() / 1000),
    user_data: processUserData(userData),
    custom_data: {
      content_name: 'Escola de Dons Espirituais - Seção de Preços',
      content_category: 'Pricing',
      content_type: 'product',
      value: 497.00,
      currency: 'BRL',
      ...customData
    },
    action_source: 'website',
    event_id: `viewcontent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }),
  
  // Purchase event (for when user completes purchase)
  purchase: (userData: any, customData: any = {}): FacebookEventData => ({
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    user_data: processUserData(userData),
    custom_data: {
      content_name: 'Escola de Dons Espirituais',
      content_category: 'Curso Online',
      content_type: 'product',
      value: 497.00,
      currency: 'BRL',
      num_items: 1,
      content_ids: ['escola-dons-curso'],
      order_id: customData.order_id || `order_${Date.now()}`,
      ...customData
    },
    action_source: 'website',
    event_id: `purchase_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })
};

// Utility to get client IP address (for server-side rendering)
export function getClientIP(request: any): string {
  const forwarded = request.headers['x-forwarded-for'];
  const real = request.headers['x-real-ip'];
  const cloudflare = request.headers['cf-connecting-ip'];
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (real) {
    return real;
  }
  
  if (cloudflare) {
    return cloudflare;
  }
  
  return request.socket.remoteAddress || '127.0.0.1';
} 