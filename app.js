// Data
const platforms = [
  {
    name: "Lovable",
    type: "Full-stack app builder",
    starting_price: "Free tier available",
    key_strengths: "GitHub integration, Supabase backend, 20x faster than traditional coding",
    best_for: "Developers wanting full-stack apps with code ownership",
    tech_stack: "React, Tailwind, Node.js, Supabase, PostgreSQL",
    deployment: "One-click, GitHub export, custom domains"
  },
  {
    name: "Bolt.new",
    type: "Full-stack app builder",
    starting_price: "Free tier available",
    key_strengths: "Multiple AI agents, enterprise infrastructure, autonomous debugging",
    best_for: "Rapid prototyping with enterprise-grade infrastructure",
    tech_stack: "Astro, Vite, Next.js, Svelte, Vue, Remix",
    deployment: "Netlify integration, instant preview"
  },
  {
    name: "Replit Agent",
    type: "Full-stack app builder",
    starting_price: "Free tier available",
    key_strengths: "Agent 3 with testing, Figma import, extended thinking mode",
    best_for: "Autonomous app building with visual design import",
    tech_stack: "Full-stack, Database, Auth, API integrations",
    deployment: "Instant deployment, built-in hosting"
  },
  {
    name: "Base44",
    type: "Full-stack app builder",
    starting_price: "Free tier available",
    key_strengths: "Natural language, auto backend, instant deployment",
    best_for: "Non-technical users building complete apps quickly",
    tech_stack: "Full-stack with backend automation",
    deployment: "Automatic hosting included"
  },
  {
    name: "Google AI Studio",
    type: "AI model platform",
    starting_price: "Free (pay-as-you-go API)",
    key_strengths: "Free Gemini access, multimodal capabilities, pay-per-token",
    best_for: "Developers needing API access to Google AI models",
    tech_stack: "Gemini 2.0/2.5 models (Flash, Pro)",
    deployment: "N/A (API platform)"
  },
  {
    name: "Manus",
    type: "AI super agent",
    starting_price: "Free tier available",
    key_strengths: "Autonomous execution, technical depth, reproducibility",
    best_for: "Power users needing technical analytics and automation",
    tech_stack: "Multi-modal, Browser, Shell, Files, APIs",
    deployment: "Cloud execution, continues after disconnect"
  },
  {
    name: "GenSpark",
    type: "AI super agent",
    starting_price: "Free tier, $24.99/mo Plus",
    key_strengths: "Accessibility, visual outputs, multimodal (voice/video)",
    best_for: "Quick visual outputs, marketing, presentations",
    tech_stack: "Multiple AI models, multi-modal outputs",
    deployment: "AI Drive storage, presentation export"
  },
  {
    name: "Tempo",
    type: "Visual IDE",
    starting_price: "$30/mo Pro",
    key_strengths: "Visual + code editor, Figma plugin, design-to-code",
    best_for: "Designers and developers collaborating on React apps",
    tech_stack: "React, Vite, Tailwind, Storybook, Expo",
    deployment: "GitHub integration, local mode sync"
  },
  {
    name: "Cursor",
    type: "AI code editor",
    starting_price: "Free Hobby, $20/mo Pro",
    key_strengths: "Unlimited autocomplete, credit-based system, multiple AI models",
    best_for: "Professional developers with complex projects",
    tech_stack: "VS Code fork, multiple AI models",
    deployment: "N/A (editor only)"
  },
  {
    name: "Windsurf",
    type: "AI code editor",
    starting_price: "Free tier, $15/mo Pro",
    key_strengths: "Cascade agent, free unlimited features, MCP support",
    best_for: "Developers wanting free AI IDE with agent features",
    tech_stack: "VS Code fork, Claude, OpenAI, Gemini, xAI",
    deployment: "App deployment (1-5/day depending on plan)"
  },
  {
    name: "Claude Code",
    type: "Terminal coding assistant",
    starting_price: "$20/mo Pro, $100-200/mo Max",
    key_strengths: "Terminal integration, agentic coding, Sonnet 4.5",
    best_for: "Terminal-based agentic coding workflows",
    tech_stack: "Terminal-based, Sonnet 4.5, GitHub integration",
    deployment: "N/A (terminal tool)"
  },
  {
    name: "Warp",
    type: "AI-powered terminal",
    starting_price: "Free tier available",
    key_strengths: "Natural language commands, AI agents, team collaboration",
    best_for: "Terminal power users wanting AI assistance",
    tech_stack: "Rust-based, GPT-4.1, command-line",
    deployment: "N/A (terminal tool)"
  },
  {
    name: "Droid (Factory AI)",
    type: "AI coding agent",
    starting_price: "Usage-based pricing",
    key_strengths: "Multi-IDE support, best models, competitive pricing",
    best_for: "Developers wanting flexibility across IDEs",
    tech_stack: "CLI/IDE extension, Anthropic, OpenAI models",
    deployment: "N/A (coding assistant)"
  }
];

const useCases = [
  {
    name: "Rapid MVP/Prototype Development",
    top_platform: "Bolt.new",
    alternative: "Replit Agent",
    price_range: "Free - $30/mo",
    technical_level: "Beginner to Intermediate"
  },
  {
    name: "Full-Stack Web Apps (Code Ownership)",
    top_platform: "Lovable",
    alternative: "Bolt.new",
    price_range: "Free - $25/mo",
    technical_level: "Intermediate to Advanced"
  },
  {
    name: "No-Code App Building",
    top_platform: "Base44",
    alternative: "Replit Agent",
    price_range: "Free - $20/mo",
    technical_level: "Beginner to No-Code"
  },
  {
    name: "Professional Software Development",
    top_platform: "Cursor",
    alternative: "Windsurf",
    price_range: "$20 - $200/mo",
    technical_level: "Advanced"
  },
  {
    name: "AI Model Integration & Research",
    top_platform: "Google AI Studio",
    alternative: "Claude Code (API)",
    price_range: "Free (usage-based)",
    technical_level: "Intermediate to Advanced"
  },
  {
    name: "Technical Data Analysis & Automation",
    top_platform: "Manus",
    alternative: "GenSpark",
    price_range: "Free - $249/mo",
    technical_level: "Advanced"
  },
  {
    name: "Marketing & Creative Content",
    top_platform: "GenSpark",
    alternative: "Manus",
    price_range: "Free - $249/mo",
    technical_level: "Beginner to Intermediate"
  },
  {
    name: "Design-to-Code Workflows",
    top_platform: "Tempo",
    alternative: "Lovable",
    price_range: "$30 - $4000/mo",
    technical_level: "All levels"
  },
  {
    name: "Terminal-Based Development",
    top_platform: "Warp",
    alternative: "Claude Code",
    price_range: "Free - $20/mo",
    technical_level: "Intermediate to Advanced"
  },
  {
    name: "Team Collaboration on Code",
    top_platform: "Windsurf",
    alternative: "Tempo",
    price_range: "Free - $60/mo",
    technical_level: "All levels"
  },
  {
    name: "Enterprise Software Development",
    top_platform: "Droid (Factory AI)",
    alternative: "Windsurf",
    price_range: "Usage-based",
    technical_level: "Advanced"
  },
  {
    name: "Learning to Code with AI",
    top_platform: "Replit Agent",
    alternative: "Lovable",
    price_range: "Free - $50/mo",
    technical_level: "Beginner"
  },
  {
    name: "Complex Refactoring & Migrations",
    top_platform: "Claude Code",
    alternative: "Droid (Factory AI)",
    price_range: "$20 - $200/mo",
    technical_level: "Advanced"
  }
];

const pricingTiers = {
  "Lovable": [
    { plan: "Free", cost: "$0", features: "Limited features, testing", best_for: "Testing platform" },
    { plan: "Pro", cost: "Varies by usage", features: "Full features, GitHub, Supabase", best_for: "Production apps" }
  ],
  "Bolt.new": [
    { plan: "Free", cost: "$0", features: "Limited AI access", best_for: "Experimentation" },
    { plan: "Paid", cost: "Credit-based", features: "Multiple AI agents, full features", best_for: "Serious development" }
  ],
  "Replit Agent": [
    { plan: "Free", cost: "$0", features: "Basic features", best_for: "Learning" },
    { plan: "Pro", cost: "$30", features: "150 prompts/mo, full AI", best_for: "Solo developers" },
    { plan: "Agent+", cost: "$4000", features: "1-3 features/week by AI", best_for: "Enterprise teams" }
  ],
  "Base44": [
    { plan: "Free", cost: "$0", features: "Limited credits", best_for: "Testing" },
    { plan: "Usage-based", cost: "Pay per use", features: "Natural language app building", best_for: "Full app development" }
  ],
  "Google AI Studio": [
    { plan: "Free (AI Studio)", cost: "$0", features: "Gemini with limits", best_for: "Development/testing" },
    { plan: "Pro", cost: "$18.99/mo", features: "Gemini 2.5 Pro, 2TB storage", best_for: "Advanced AI + productivity" },
    { plan: "Ultra", cost: "$234.99/mo", features: "Top-tier AI, video generation", best_for: "Power users, video/research" }
  ],
  "Manus": [
    { plan: "Free", cost: "$0", features: "Basic access", best_for: "Testing" },
    { plan: "Pro", cost: "$24.99", features: "10k credits, 50GB AI Drive, priority", best_for: "Regular use" }
  ],
  "GenSpark": [
    { plan: "Free", cost: "$0", features: "200 credits/day, limited agents", best_for: "Testing" },
    { plan: "Plus", cost: "$24.99", features: "10k credits, priority agents", best_for: "Individuals/small teams" },
    { plan: "Pro", cost: "$249.99", features: "125k credits, 1TB storage", best_for: "Agencies/heavy users" }
  ],
  "Tempo": [
    { plan: "Free", cost: "$0 (30 prompts)", features: "30 prompts (5/day)", best_for: "Testing" },
    { plan: "Pro", cost: "$30", features: "150 prompts/mo, full agents", best_for: "Indie developers" },
    { plan: "Agent+", cost: "$4000", features: "Enterprise agent team", best_for: "Enterprise features" }
  ],
  "Cursor": [
    { plan: "Hobby", cost: "$0", features: "2K completions, 50 requests", best_for: "Light use" },
    { plan: "Pro", cost: "$20", features: "Unlimited Tab, $20 API credits", best_for: "Regular development" },
    { plan: "Ultra", cost: "$200", features: "20x Pro usage", best_for: "Heavy users" },
    { plan: "Teams", cost: "$40/user", features: "SSO, admin controls", best_for: "Teams" }
  ],
  "Windsurf": [
    { plan: "Free", cost: "$0", features: "25 credits/mo", best_for: "Testing" },
    { plan: "Pro", cost: "$15", features: "500 credits/mo", best_for: "Solo developers" },
    { plan: "Teams", cost: "$30/user", features: "500 credits/user", best_for: "Small teams" },
    { plan: "Enterprise", cost: "$60/user", features: "1000 credits/user, RBAC", best_for: "Large organizations" }
  ],
  "Claude Code": [
    { plan: "Free", cost: "$0", features: "Limited Sonnet", best_for: "Basic use" },
    { plan: "Pro", cost: "$20 ($17 annual)", features: "10-40 prompts/5hrs, Claude Code", best_for: "Regular coding" },
    { plan: "Max $100", cost: "$100", features: "50-200 prompts/5hrs", best_for: "Professional heavy use" },
    { plan: "Max $200", cost: "$200", features: "200-800 prompts/5hrs", best_for: "Professional intensive use" }
  ],
  "Warp": [
    { plan: "Free", cost: "$0", features: "Free terminal", best_for: "Basic terminal" },
    { plan: "Team", cost: "$25/user", features: "Team features, central billing", best_for: "Team collaboration" }
  ],
  "Droid (Factory AI)": [
    { plan: "Usage-based", cost: "Model API costs", features: "Anthropic/OpenAI API access", best_for: "Flexible model choice" }
  ]
};

// Chat history
let chatHistory = [];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  initializePlatformTable();
  initializeUseCases();
  initializePricing();
  initializeCompareSelects();
});

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
}

// Section navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  event.target.classList.add('active');
}

// Platform table
function initializePlatformTable() {
  const tbody = document.getElementById('platformTableBody');
  tbody.innerHTML = '';
  platforms.forEach(platform => {
    const row = document.createElement('tr');
    row.className = 'clickable';
    row.innerHTML = `
      <td><strong>${platform.name}</strong></td>
      <td>${platform.type}</td>
      <td>${platform.starting_price}</td>
      <td>${platform.key_strengths}</td>
      <td>${platform.best_for}</td>
      <td>${platform.tech_stack}</td>
    `;
    tbody.appendChild(row);
  });
}

function filterTable() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const typeValue = document.getElementById('typeFilter').value;
  const rows = document.querySelectorAll('#platformTableBody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    const type = row.cells[1].textContent;
    const matchesSearch = text.includes(searchValue);
    const matchesType = !typeValue || type === typeValue;
    
    if (matchesSearch && matchesType) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

let sortDirection = {};
function sortTable(columnIndex) {
  const table = document.getElementById('platformTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  sortDirection[columnIndex] = !sortDirection[columnIndex];
  const direction = sortDirection[columnIndex] ? 1 : -1;
  
  rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();
    return direction * aText.localeCompare(bText);
  });
  
  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
}

// Use cases
function initializeUseCases() {
  renderUseCases();
}

function renderUseCases(filter = 'all') {
  const grid = document.getElementById('useCaseGrid');
  grid.innerHTML = '';
  
  const filtered = filter === 'all' ? useCases : useCases.filter(uc => 
    uc.technical_level.toLowerCase().includes(filter.toLowerCase())
  );
  
  filtered.forEach(useCase => {
    const card = document.createElement('div');
    card.className = 'use-case-card';
    card.innerHTML = `
      <h3>${useCase.name}</h3>
      <div class="use-case-detail">
        <span class="use-case-label">Top Platform:</span>
        <span class="use-case-value">${useCase.top_platform}</span>
      </div>
      <div class="use-case-detail">
        <span class="use-case-label">Alternative:</span>
        <span class="use-case-value">${useCase.alternative}</span>
      </div>
      <div class="use-case-detail">
        <span class="use-case-label">Price Range:</span>
        <span class="use-case-value">${useCase.price_range}</span>
      </div>
      <div class="use-case-detail">
        <span class="use-case-label">Technical Level:</span>
        <span class="use-case-value">${useCase.technical_level}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterUseCases(level) {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  event.target.classList.add('active');
  renderUseCases(level);
}

// Pricing
function initializePricing() {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = '';
  
  Object.keys(pricingTiers).forEach(platformName => {
    const tiers = pricingTiers[platformName];
    const section = document.createElement('div');
    section.className = 'platform-pricing';
    section.innerHTML = `
      <div class="platform-header" onclick="togglePricing(this)">
        <h3>${platformName}</h3>
        <i class="fas fa-chevron-down expand-icon"></i>
      </div>
      <div class="pricing-tiers">
        ${tiers.map(tier => `
          <div class="pricing-tier">
            <div class="tier-name">${tier.plan}</div>
            <div class="tier-cost">${tier.cost}</div>
            <div class="tier-features"><strong>Features:</strong> ${tier.features}</div>
            <div class="tier-best-for"><strong>Best for:</strong> ${tier.best_for}</div>
          </div>
        `).join('')}
      </div>
    `;
    grid.appendChild(section);
  });
}

function togglePricing(header) {
  const parent = header.parentElement;
  parent.classList.toggle('expanded');
}

// Recommendations
function getRecommendations() {
  const skillLevel = document.getElementById('skillLevel').value;
  const budget = document.getElementById('budget').value;
  const projectType = document.getElementById('projectType').value;
  const priority = document.getElementById('priority').value;
  
  if (!skillLevel || !budget || !projectType || !priority) {
    alert('Please fill in all fields');
    return;
  }
  
  const recommendations = calculateRecommendations(skillLevel, budget, projectType, priority);
  displayRecommendations(recommendations);
}

function calculateRecommendations(skill, budget, project, priority) {
  const recommendations = [];
  
  // Logic for recommendations based on inputs
  if (project === 'prototype' && priority === 'speed') {
    recommendations.push({
      rank: 1,
      platform: 'Bolt.new',
      reason: 'Bolt.new excels at rapid prototyping with multiple AI agents and instant preview. Perfect for quick MVPs with enterprise-grade infrastructure.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Replit Agent',
      reason: 'Replit Agent offers autonomous app building with instant deployment, making it ideal for rapid development cycles.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Base44',
      reason: 'Base44 provides natural language app building with automatic backend setup, perfect for speed-focused development.'
    });
  } else if (skill === 'beginner') {
    recommendations.push({
      rank: 1,
      platform: 'Base44',
      reason: 'Base44 is perfect for beginners with its natural language interface and automatic backend generation. No coding required!'
    });
    recommendations.push({
      rank: 2,
      platform: 'Replit Agent',
      reason: 'Replit Agent offers a great learning environment with autonomous features and built-in hosting, ideal for beginners.'
    });
    recommendations.push({
      rank: 3,
      platform: 'GenSpark',
      reason: 'GenSpark provides an accessible interface with visual outputs, great for beginners exploring AI-powered development.'
    });
  } else if (skill === 'advanced' && priority === 'quality') {
    recommendations.push({
      rank: 1,
      platform: 'Cursor',
      reason: 'Cursor is the top choice for professional developers, offering unlimited autocomplete and multiple AI models for maximum code quality.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Windsurf',
      reason: 'Windsurf provides advanced IDE features with Cascade agent and MCP support, excellent for quality-focused development.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Claude Code',
      reason: 'Claude Code offers terminal-based agentic coding with Sonnet 4.5, perfect for advanced developers prioritizing code quality.'
    });
  } else if (budget === 'free') {
    recommendations.push({
      rank: 1,
      platform: 'Windsurf',
      reason: 'Windsurf offers the best free tier with unlimited features and Cascade agent capabilities, providing professional-grade tools at no cost.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Replit Agent',
      reason: 'Replit Agent has a generous free tier with basic features and instant deployment, perfect for budget-conscious developers.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Warp',
      reason: 'Warp provides a free AI-powered terminal with natural language commands, excellent for terminal-based development at no cost.'
    });
  } else if (priority === 'ownership') {
    recommendations.push({
      rank: 1,
      platform: 'Lovable',
      reason: 'Lovable excels in code ownership with GitHub integration and full code export. You own everything you build.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Bolt.new',
      reason: 'Bolt.new offers Netlify integration and full code access, ensuring you maintain complete ownership of your applications.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Tempo',
      reason: 'Tempo provides GitHub integration and local mode sync, giving you full control and ownership of your code.'
    });
  } else if (project === 'enterprise') {
    recommendations.push({
      rank: 1,
      platform: 'Droid (Factory AI)',
      reason: 'Droid offers multi-IDE support with best-in-class models and competitive pricing, ideal for enterprise-scale development.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Cursor Teams',
      reason: 'Cursor Teams provides SSO, admin controls, and unlimited usage for teams, perfect for enterprise software development.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Windsurf Enterprise',
      reason: 'Windsurf Enterprise offers 1000 credits per user and RBAC, designed for large organizations with complex needs.'
    });
  } else {
    // Default recommendations
    recommendations.push({
      rank: 1,
      platform: 'Lovable',
      reason: 'Lovable offers a perfect balance of speed, code quality, and ownership with GitHub and Supabase integration.'
    });
    recommendations.push({
      rank: 2,
      platform: 'Cursor',
      reason: 'Cursor provides professional-grade AI-assisted development with unlimited autocomplete and multiple AI models.'
    });
    recommendations.push({
      rank: 3,
      platform: 'Windsurf',
      reason: 'Windsurf offers excellent value with its Cascade agent and free unlimited features, perfect for most developers.'
    });
  }
  
  return recommendations;
}

function displayRecommendations(recommendations) {
  const results = document.getElementById('recommendationsResults');
  results.innerHTML = '';
  results.classList.add('show');
  
  recommendations.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    card.innerHTML = `
      <span class="recommendation-rank">#${rec.rank} Recommendation</span>
      <h3>${rec.platform}</h3>
      <p class="recommendation-reason">${rec.reason}</p>
      <div class="use-case-detail" style="margin-top: 12px;">
        <span class="use-case-label">Starting Price:</span>
        <span class="use-case-value">${platforms.find(p => p.name === rec.platform)?.starting_price || 'N/A'}</span>
      </div>
    `;
    results.appendChild(card);
  });
}

// Comparison
function initializeCompareSelects() {
  const selects = ['compare1', 'compare2', 'compare3'];
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    platforms.forEach(platform => {
      const option = document.createElement('option');
      option.value = platform.name;
      option.textContent = platform.name;
      select.appendChild(option);
    });
  });
}

function compareplatforms() {
  const platform1 = document.getElementById('compare1').value;
  const platform2 = document.getElementById('compare2').value;
  const platform3 = document.getElementById('compare3').value;
  
  const selected = [platform1, platform2, platform3].filter(p => p);
  
  if (selected.length < 2) {
    alert('Please select at least 2 platforms to compare');
    return;
  }
  
  const results = document.getElementById('comparisonResults');
  results.classList.add('show');
  
  const selectedPlatforms = platforms.filter(p => selected.includes(p.name));
  
  let tableHTML = `
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            ${selectedPlatforms.map(p => `<th>${p.name}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Type</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.type}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Starting Price</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.starting_price}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Key Strengths</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.key_strengths}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Best For</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.best_for}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Tech Stack</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.tech_stack}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Deployment</strong></td>
            ${selectedPlatforms.map(p => `<td>${p.deployment}</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
  
  results.innerHTML = tableHTML;
}

function exportComparison() {
  alert('Export to PDF feature coming soon! This will allow you to save your comparison for offline reference.');
}

// Chat
function toggleChat() {
  const container = document.getElementById('chatContainer');
  container.classList.toggle('open');
  if (container.classList.contains('open')) {
    document.getElementById('chatInput').focus();
  }
}

function handleChatKeypress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Add user message
  addChatMessage(message, 'user');
  input.value = '';
  
  // Generate AI response
  setTimeout(() => {
    const response = generateAIResponse(message);
    addChatMessage(response, 'assistant');
  }, 500);
}

function addChatMessage(text, sender) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  chatHistory.push({ sender, text });
}

function generateAIResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Price-related queries
  if (lowerMessage.includes('cheap') || lowerMessage.includes('free') || lowerMessage.includes('cost')) {
    return 'The most affordable options are Windsurf (free tier with great features), Replit Agent, Base44, and Warp - all offering generous free tiers. For paid options under $30/mo, consider Windsurf Pro ($15), Cursor Pro ($20), or GenSpark Plus ($24.99).';
  }
  
  // Beginner queries
  if (lowerMessage.includes('beginner') || lowerMessage.includes('learn') || lowerMessage.includes('new to coding')) {
    return 'For beginners, I recommend Base44 (natural language, no coding required), Replit Agent (great learning environment), or GenSpark (accessible interface). All three provide easy entry points into AI-powered development without requiring extensive coding knowledge.';
  }
  
  // Code ownership queries
  if (lowerMessage.includes('ownership') || lowerMessage.includes('export') || lowerMessage.includes('github')) {
    return 'For full code ownership, Lovable is the top choice with GitHub integration and Supabase backend. Bolt.new also offers Netlify integration and code export. Tempo provides GitHub integration with local mode sync for complete control.';
  }
  
  // Professional/advanced queries
  if (lowerMessage.includes('professional') || lowerMessage.includes('advanced') || lowerMessage.includes('enterprise')) {
    return 'For professional development, Cursor leads with unlimited autocomplete and multiple AI models ($20-200/mo). Windsurf offers excellent Cascade agent features. For enterprise needs, consider Droid (Factory AI) for multi-IDE support or Cursor Teams for SSO and admin controls.';
  }
  
  // Specific platform queries
  if (lowerMessage.includes('lovable')) {
    return 'Lovable is a full-stack app builder with GitHub integration, Supabase backend, and claims to be 20x faster than traditional coding. Best for developers wanting full-stack apps with code ownership. Uses React, Tailwind, Node.js, and PostgreSQL.';
  }
  
  if (lowerMessage.includes('bolt')) {
    return 'Bolt.new excels at rapid prototyping with multiple AI agents, enterprise infrastructure, and autonomous debugging. It supports Astro, Vite, Next.js, Svelte, Vue, and Remix with Netlify integration for instant preview.';
  }
  
  if (lowerMessage.includes('cursor')) {
    return 'Cursor is an AI code editor (VS Code fork) with unlimited autocomplete, credit-based system, and multiple AI models. Plans range from free Hobby tier to $200/mo Ultra. Best for professional developers with complex projects.';
  }
  
  if (lowerMessage.includes('windsurf')) {
    return 'Windsurf is an excellent AI code editor with free unlimited features, Cascade agent, and MCP support. Starting at free tier with 25 credits, Pro at $15/mo with 500 credits. Great value for developers wanting agent features.';
  }
  
  if (lowerMessage.includes('replit')) {
    return 'Replit Agent features autonomous app building with Agent 3, testing capabilities, Figma import, and extended thinking mode. Free tier available, Pro at $30/mo. Perfect for learning and autonomous development with instant deployment.';
  }
  
  if (lowerMessage.includes('base44')) {
    return 'Base44 is perfect for non-technical users, offering natural language app building with automatic backend and instant deployment. Free tier with limited credits, then usage-based pricing. No coding required!';
  }
  
  if (lowerMessage.includes('claude') || lowerMessage.includes('code')) {
    return 'Claude Code is a terminal coding assistant with Sonnet 4.5 and GitHub integration. Plans range from free to $200/mo for intensive use. Best for terminal-based agentic coding workflows with 10-800 prompts per 5 hours.';
  }
  
  if (lowerMessage.includes('tempo')) {
    return 'Tempo is a visual IDE combining visual and code editing with Figma plugin and design-to-code capabilities. Starting at $30/mo Pro. Perfect for designers and developers collaborating on React apps with Vite, Tailwind, and Storybook.';
  }
  
  if (lowerMessage.includes('warp')) {
    return 'Warp is an AI-powered terminal built with Rust, featuring natural language commands, AI agents, and team collaboration with GPT-4.1. Free tier available, Team plan at $25/user. Great for terminal power users.';
  }
  
  if (lowerMessage.includes('google') || lowerMessage.includes('gemini')) {
    return 'Google AI Studio provides free API access to Gemini models with multimodal capabilities and pay-per-token pricing. Free tier for development/testing, Pro at $18.99/mo, Ultra at $234.99/mo. Best for AI model integration and research.';
  }
  
  if (lowerMessage.includes('manus')) {
    return 'Manus is an AI super agent with autonomous execution, technical depth, and reproducibility. Free tier available, Pro at $24.99/mo with 10k credits. Best for power users needing technical analytics and automation with cloud execution.';
  }
  
  if (lowerMessage.includes('genspark')) {
    return 'GenSpark is an accessible AI super agent with visual outputs and multimodal capabilities (voice/video). Free tier with 200 credits/day, Plus at $24.99/mo, Pro at $249.99/mo. Great for quick visual outputs, marketing, and presentations.';
  }
  
  if (lowerMessage.includes('droid') || lowerMessage.includes('factory')) {
    return 'Droid (Factory AI) offers multi-IDE support with best-in-class Anthropic and OpenAI models at competitive usage-based pricing. Best for developers wanting flexibility across different IDEs with CLI/IDE extension support.';
  }
  
  // React/frontend queries
  if (lowerMessage.includes('react') || lowerMessage.includes('frontend')) {
    return 'For React development, I recommend Tempo (visual IDE with React/Vite/Tailwind), Lovable (React with Tailwind and Supabase), or Bolt.new (supports React via Next.js and other frameworks). All offer strong React support.';
  }
  
  // Comparison queries
  if (lowerMessage.includes('compare') || lowerMessage.includes('difference') || lowerMessage.includes('versus') || lowerMessage.includes('vs')) {
    return 'I can help you compare platforms! Try using the "Side-by-Side" tab to select 2-3 platforms for detailed comparison. Or ask me about specific platforms like "Compare Cursor and Windsurf" or "What\'s the difference between Lovable and Bolt?"';
  }
  
  // MVP/prototype queries
  if (lowerMessage.includes('mvp') || lowerMessage.includes('prototype') || lowerMessage.includes('quick')) {
    return 'For rapid MVP/prototype development, Bolt.new is the top choice with multiple AI agents and instant preview. Replit Agent is also excellent for autonomous building. Both offer free tiers and are perfect for speed-focused development.';
  }
  
  // Default response
  return 'I can help you find the perfect vibe coding platform! Ask me about specific platforms, pricing, use cases, or your requirements (like "I\'m a beginner" or "I need code ownership" or "What\'s the cheapest option?"). You can also use the "Find Your Platform" tab for personalized recommendations.';
}
