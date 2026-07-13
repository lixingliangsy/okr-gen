export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "OKRGen",
  slug: "okr-gen",
  tagline: "An objective to 3 OKRs, instantly",
  description: "Give your objective and a little context; get 3 objectives each with two key results. For founders and team leads who want focus without a workshop.",
  toolTitle: "Generate OKRs",
  resultLabel: "Your OKRs",
  ctaLabel: "Generate",
  features: [
  "3 objectives",
  "2 KRs each",
  "Context-aware",
  "Copy-ready"
],
  inputs: [
  {
    "key": "objective",
    "label": "Your objective",
    "type": "input",
    "placeholder": "e.g. Grow active users"
  },
  {
    "key": "context",
    "label": "Context (optional)",
    "type": "textarea",
    "placeholder": "We launched 2 months ago, 300 signups, low retention."
  }
] as InputField[],
  systemPrompt: "You are an OKR coach. Given an objective and optional context, produce 3 objectives each with two measurable key results that ladder up to the goal.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Save, align"
  },
  {
    "tier": "Team",
    "price": "$24/mo",
    "desc": "Shared, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const obj = (inputs['objective'] || '').trim() || 'Grow the product'
  const ctx = (inputs['context'] || '').trim()
  let out = 'OKRs for: ' + obj + '\n\n'
  const os = [obj, 'Strengthen ' + (ctx.split(/[.\n]/)[0] || 'foundations').slice(0, 30), 'Scale what works']
  os.forEach((o, i) => {
    out += 'O' + (i + 1) + ': ' + o + '\n'
    out += '  KR1: ' + (i === 0 ? 'Reach 2x key metric' : i === 1 ? 'Cut top friction' : 'Double output') + '\n'
    out += '  KR2: ' + (i === 0 ? 'Ship 3 initiatives' : i === 1 ? 'Fix 2 issues' : 'Reuse 1 win') + '\n'
  })
  return out + '\n--- (Mock skeleton. Add OPENAI_API_KEY for measurable KRs.)'
}
}
