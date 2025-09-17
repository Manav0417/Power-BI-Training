const content = {
  module1: `
    <div id="module1" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Module 1: The "What" and "Why" of Power BI</h2>
      <p class="text-lg text-gray-400 mb-8">This section introduces the core concepts...</p>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <h3 class="text-xl font-semibold text-green-400 mb-3">What is Business Intelligence (BI)?</h3>
        <p>BI is the process of using technology to analyze data...</p>
        <div class="flex items-center justify-around text-center p-4 bg-gray-900 rounded-lg">
          <span class="text-2xl">📊</span>
          <span class="text-xl text-gray-500 font-light">➡️</span>
          <span class="text-2xl">📈</span>
          <span class="text-xl text-gray-500 font-light">➡️</span>
          <span class="text-2xl">💡</span>
        </div>
      </div>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 class="text-xl font-semibold text-green-400 mb-3">The Power BI Ecosystem</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-gray-700 rounded-lg border-l-4 border-green-500"><strong class="block text-green-300">1. Power BI Desktop</strong> The free Windows application...</li>
          <li class="p-4 bg-gray-700 rounded-lg border-l-4 border-green-500"><strong class="block text-green-300">2. Power BI Service</strong> The cloud-based service...</li>
          <li class="p-4 bg-gray-700 rounded-lg border-l-4 border-green-500"><strong class="block text-green-300">3. Power BI Mobile</strong> Companion apps for viewing reports...</li>
        </ul>
      </div>
    </div>
  `,
  module2: `
    <div id="module2" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Module 2: Getting Your Hands Dirty</h2>
      <p class="text-lg text-gray-400 mb-8">This module covers connecting to data...</p>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
        <h3 class="text-xl font-semibold text-green-400 mb-4">The Power BI Workflow</h3>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
          <div id="step-1" class="workflow-step bg-gray-700 p-4 rounded-lg cursor-pointer"><strong>1. Get Data</strong></div>
          <div id="step-2" class="workflow-step bg-gray-700 p-4 rounded-lg cursor-pointer"><strong>2. Transform</strong></div>
          <div id="step-3" class="workflow-step bg-gray-700 p-4 rounded-lg cursor-pointer"><strong>3. Model</strong></div>
          <div id="step-4" class="workflow-step bg-gray-700 p-4 rounded-lg cursor-pointer"><strong>4. Visualize</strong></div>
          <div id="step-5" class="workflow-step bg-gray-700 p-4 rounded-lg cursor-pointer"><strong>5. Publish</strong></div>
        </div>
        <div id="workflow-details" class="mt-4 p-4 bg-gray-700 rounded-lg border-l-4 border-green-500 hidden"></div>
      </div>
    </div>
  `,
  module3: `
    <div id="module3" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Module 3: Shaping Your Data</h2>
      <p class="text-lg text-gray-400 mb-8">A good data model is the foundation...</p>
      <div class="comparison-card bg-gray-800 p-6 rounded-lg border-t-4 border-green-500">
        <h4 class="text-xl font-semibold text-green-400 mb-3">Calculated Column</h4>
        <p>Row-based calculations stored in the model...</p>
      </div>
      <div class="comparison-card bg-gray-800 p-6 rounded-lg border-t-4 border-green-500 mt-6">
        <h4 class="text-xl font-semibold text-green-400 mb-3">Measure</h4>
        <p>Dynamic formulas calculated on the fly...</p>
      </div>
    </div>
  `,
  module4: `
    <div id="module4" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Module 4: Telling the Story</h2>
      <p class="text-lg text-gray-400 mb-8">Choose the right visual for the right message.</p>
      <div id="visual-selector" class="flex flex-wrap gap-3 mb-6">
        <button data-type="compare" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Compare Values</button>
        <button data-type="trend" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Show a Trend</button>
        <button data-type="part" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Part of a Whole</button>
        <button data-type="kpi" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Show a KPI</button>
      </div>
      <div class="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 id="visual-title" class="text-lg font-semibold">Select a goal above</h4>
          <p id="visual-desc" class="mt-2 text-gray-400">The right visual depends on the question.</p>
        </div>
        <div class="chart-container">
          <canvas id="visual-chart"></canvas>
        </div>
      </div>
    </div>
  `,
  module5: `
    <div id="module5" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Module 5: Sharing Your Insights</h2>
      <p class="text-lg text-gray-400 mb-8">Learn how to publish and collaborate.</p>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 class="text-xl font-semibold text-green-400 mb-3">Reports vs. Dashboards</h3>
        <p>Reports = interactive, multi-page. Dashboards = one-page KPI summary.</p>
      </div>
    </div>
  `,
  lab: `
    <div id="lab" class="content-fade-in">
      <h2 class="text-3xl font-bold mb-2 text-green-300">Hands-On Lab</h2>
      <p class="text-lg text-gray-400 mb-8">Follow these steps to build a Sales Summary report.</p>
      <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div class="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div id="progress-bar" class="bg-green-600 h-2.5 rounded-full" style="width:0%"></div>
        </div>
        <p id="progress-text" class="text-center text-sm mb-4">0% Complete</p>
        <label class="task-list-item flex items-center p-3 bg-gray-700 rounded-lg mb-2">
          <input type="checkbox"><span class="ml-3">Connect to Sample_Sales_Data.xlsx</span>
        </label>
        <label class="task-list-item flex items-center p-3 bg-gray-700 rounded-lg mb-2">
          <input type="checkbox"><span class="ml-3">Clean data in Power Query</span>
        </label>
      </div>
    </div>
  `
};

// ---- Core Navigation & Features ----
const contentArea = document.getElementById('content-area');
const navLinks = document.querySelectorAll('#sidebar-nav a');
let chartInstance = null;

Chart.defaults.color = '#a0aec0';
Chart.defaults.borderColor = '#4a5568';

function navigate() {
  const hash = window.location.hash || '#module1';
  const contentKey = hash.substring(1);
  if (content[contentKey]) {
    contentArea.innerHTML = content[contentKey];
    updateActiveLink(hash);
    initializeModuleScripts(contentKey);
  }
}

function updateActiveLink(activeHash) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === activeHash);
  });
}

function initializeModuleScripts(moduleKey) {
  if (moduleKey === 'module2') setupWorkflowInteraction();
  if (moduleKey === 'module4') setupVisualChooser();
  if (moduleKey === 'lab') setupLabChecklist();
}

function setupWorkflowInteraction() {
  const steps = document.querySelectorAll('.workflow-step');
  const detailsBox = document.getElementById('workflow-details');
  const detailsContent = {
    'step-1': 'Connect to data sources (Excel, SQL, Web).',
    'step-2': 'Clean and shape data in Power Query.',
    'step-3': 'Build relationships in the data model.',
    'step-4': 'Create visuals to uncover insights.',
    'step-5': 'Publish and share in Power BI Service.'
  };
  steps.forEach(step => {
    step.addEventListener('click', () => {
      detailsBox.textContent = detailsContent[step.id];
      detailsBox.classList.remove('hidden');
      steps.forEach(s => s.classList.replace('bg-green-700', 'bg-gray-700'));
      step.classList.replace('bg-gray-700', 'bg-green-700');
    });
  });
}

function setupVisualChooser() {
  const visualData = {
    compare: { title: 'Bar Chart', desc: 'Compare categories.', type: 'bar',
      data: { labels: ['A','B','C'], datasets: [{ data:[450,620,510], backgroundColor:'#22c55e' }] } },
    trend: { title: 'Line Chart', desc: 'Show trends over time.', type: 'line',
      data: { labels: ['Jan','Feb','Mar'], datasets: [{ data:[120,190,150], borderColor:'#34d399' }] } },
    part: { title: 'Donut Chart', desc: 'Show proportions.', type: 'doughnut',
      data: { labels:['North','South'], datasets: [{ data:[300,200], backgroundColor:['#10b981','#34d399'] }] } },
    kpi: { title: 'Card/Gauge', desc: 'Show a KPI.', type: 'bar',
      data: { labels:['Revenue'], datasets: [{ data:[8.2], backgroundColor:'#84cc16' }] },
      options: { indexAxis:'y', plugins:{legend:{display:false}}, scales:{x:{max:10}} } }
  };

  const ctx = document.getElementById('visual-chart').getContext('2d');
  const titleEl = document.getElementById('visual-title');
  const descEl = document.getElementById('visual-desc');

  document.getElementById('visual-selector').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const type = e.target.dataset.type;
      const config = visualData[type];
      titleEl.textContent = config.title;
      descEl.textContent = config.desc;
      if (chartInstance) chartInstance.destroy();
      chartInstance = new Chart(ctx, { type: config.type, data: config.data, options: config.options || {} });
    }
  });
}

function setupLabChecklist() {
  const checkboxes = document.querySelectorAll('#task-list input[type="checkbox"]');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  function updateProgress() {
    const checked = document.querySelectorAll('#task-list input:checked').length;
    const total = checkboxes.length;
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
    progressBar.style.width = percent + '%';
    progressText.textContent = `${percent}% Complete (${checked}/${total})`;
  }
  checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
  updateProgress();
}

window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);
