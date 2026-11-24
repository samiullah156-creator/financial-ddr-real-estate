import { Language } from '../types';
import { productsData } from '../data';

export interface WhatsAppContextData {
  productId?: string;
  referenceId?: string;
}

/**
 * Generates a dynamic WhatsApp URL with context-aware, translated messages.
 */
export function getWhatsAppUrl(
  lang: Language,
  page: string,
  extra?: WhatsAppContextData
): string {
  const phone = '966599606818';
  let message = '';

  if (lang === 'ar') {
    message = 'مرحباً فريق الأناقة المتميزة (ANAQCO). ';
    
    if (page === 'contact' && extra?.referenceId) {
      message += `لقد قمت بتقديم طلب عرض سعر برقم المرجع: ${extra.referenceId}. أود مناقشة الخطوات التالية معكم.`;
    } else if (page === 'contact') {
      message += 'أود طلب استشارة فنية بخصوص أحد المشاريع ومناقشة متطلبات التصميم والتنفيذ.';
    } else if (page === 'products' && extra?.productId) {
      const prod = productsData.find((p) => p.id === extra.productId);
      const prodName = prod ? prod.name : 'منتجات الألمنيوم والزجاج';
      message += `أنا مهتم بمعرفة المزيد من التفاصيل الفنية والأسعار بخصوص نظام: ${prodName}.`;
    } else if (page === 'solutions') {
      message += 'أرغب بالاستفسار عن الحلول المعمارية المخصصة للألمنيوم والزجاج والحديد المقاوم للحريق التي تقدمونها.';
    } else if (page === 'about') {
      message += 'أرغب في التعرف أكثر على مؤهلات ومشاريع شركة الأناقة المتميزة (ANAQCO) لفرص التعاون المستقبلية.';
    } else if (page === 'projects') {
      message += 'كنت أتصفح مشاريعكم المنجزة وأود مناقشة متطلبات مشروع هندسي مماثل.';
    } else {
      message += 'أرغب في استشارة فنية والحصول على تقدير تكلفة لمشروعي في أنظمة الألمنيوم والزجاج.';
    }
  } else {
    message = 'Hello ANAQCO Engineering Team. ';

    if (page === 'contact' && extra?.referenceId) {
      message += `I have submitted a project quote request with reference ID: ${extra.referenceId}. I would like to discuss the next steps.`;
    } else if (page === 'contact') {
      message += 'I would like to request a technical consultation for my upcoming architectural project.';
    } else if (page === 'products' && extra?.productId) {
      const prod = productsData.find((p) => p.id === extra.productId);
      const prodName = prod ? prod.name : 'Aluminum & Glass Systems';
      message += `I am interested in obtaining further technical specifications and estimated pricing for: ${prodName}.`;
    } else if (page === 'solutions') {
      message += 'I am interested in inquiring about your custom architectural aluminum, glass, and fire-rated steel solutions.';
    } else if (page === 'about') {
      message += 'I would like to inquire about ANAQCO credentials, compliance certificates, and engineering capabilities.';
    } else if (page === 'projects') {
      message += 'I am reviewing your featured engineering projects and would like to discuss a similar installation for our project.';
    } else {
      message += 'I am interested in requesting a detailed quote and technical estimate for aluminum, glass, or steel installations.';
    }
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
