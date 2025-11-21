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
  module6: `
<div id="module6" class="content-fade-in">

    <h2 class="text-3xl font-bold mb-4 text-green-300">Module 6: DAX Functions</h2>
    <p class="text-lg text-gray-400 mb-8">
        These are the most commonly used DAX functions you will use on a daily basis in Power BI. 
        Each example is simple, practical, and easy to understand.
    </p>

    <!-- ============================= -->
    <!-- CALCULATED COLUMN FUNCTIONS   -->
    <!-- ============================= -->

    <h3 class="text-2xl font-bold text-green-400 mb-4">Calculated Column Functions</h3>

    <div class="space-y-6">

        <!-- IF() -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">1. IF()</h4>
            <p class="text-gray-300 mb-2">Applies a condition and returns values based on TRUE/FALSE.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">Status = IF(Sales[Amount] > 50000, "High", "Low")</pre>
        </div>

        <!-- SWITCH() -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">2. SWITCH()</h4>
            <p class="text-gray-300 mb-2">Cleaner alternative to multiple IF statements.</p>
<pre class="bg-black text-green-400 p-3 rounded text-sm">
Rating = SWITCH(TRUE(),
    Sales[Amount] > 50000, "A",
    Sales[Amount] > 30000, "B",
    "C")
</pre>
        </div>

        <!-- CONCATENATE / & -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">3. CONCATENATE() / &</h4>
            <p class="text-gray-300 mb-2">Combines text fields.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">FullName = Employee[FirstName] & " " & Employee[LastName]</pre>
        </div>

        <!-- LEFT RIGHT MID -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">4. LEFT(), RIGHT(), MID()</h4>
            <p class="text-gray-300 mb-2">Extract parts of a text value.</p>
<pre class="bg-black text-green-400 p-3 rounded text-sm">
Year = LEFT(Invoice[InvoiceID], 4)
Code = RIGHT(Product[SKU], 3)
MiddleText = MID(Product[Code], 2, 4)
</pre>
        </div>

        <!-- FORMAT -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">5. FORMAT()</h4>
            <p class="text-gray-300 mb-2">Converts dates or numbers into readable text.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">MonthName = FORMAT(Sales[Date], "MMM")</pre>
        </div>

        <!-- VALUE -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">6. VALUE()</h4>
            <p class="text-gray-300 mb-2">Converts text into a numeric value.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">AmountNum = VALUE(Sales[AmountText])</pre>
        </div>

        <!-- DATEDIFF -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">7. DATEDIFF()</h4>
            <p class="text-gray-300 mb-2">Calculates difference between two dates/times.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">AgeInDays = DATEDIFF(Employee[JoinDate], TODAY(), DAY)</pre>
        </div>

        <!-- YEAR MONTH DAY -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">8. YEAR(), MONTH(), DAY()</h4>
            <p class="text-gray-300 mb-2">Extracts a part of a date.</p>
            <pre class="bg-black text-green-400 p-3 rounded text-sm">SalesYear = YEAR(Sales[Date])</pre>
        </div>

        <!-- LOOKUPVALUE -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="text-xl font-semibold text-green-300">9. LOOKUPVALUE()</h4>
            <p class="text-gray-300 mb-2">Finds a value from another table based on lookup.</p>
<pre class="bg-black text-green-400 p-3 rounded text-sm">
PartName = LOOKUPVALUE(
    Parts[Name],
    Parts[PartID],
    Inventory[PartID]
)
</pre>
        </div>

    </div>

    <!-- ============================= -->
    <!-- MEASURE FUNCTIONS             -->
    <!-- ============================= -->

    <h3 class="text-2xl font-bold text-green-400 mt-10 mb-4">Measure Functions</h3>

    <div class="space-y-6">

        <!-- SUM -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">1. SUM()</h4>
            <p class="text-gray-300 mb-2">Adds all numeric values.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">Total Sales = SUM(Sales[Amount])</pre>
        </div>

        <!-- AVERAGE -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">2. AVERAGE()</h4>
            <p class="text-gray-300 mb-2">Returns average of a column.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">Average Cost = AVERAGE(Material[Cost])</pre>
        </div>

        <!-- COUNT / DISTINCTCOUNT -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">3. COUNT() / DISTINCTCOUNT()</h4>
            <p class="text-gray-300 mb-2">Counts rows or unique values.</p>
<pre class="bg-black text-blue-300 p-3 rounded text-sm">
Total Orders = COUNT(Sales[OrderID])
Unique Machines = DISTINCTCOUNT(Machine[MachineID])
</pre>
        </div>

        <!-- DIVIDE -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">4. DIVIDE()</h4>
            <p class="text-gray-300 mb-2">Safe division used for % calculations.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">Rejection % = DIVIDE([RejectedQty], [TotalQty])</pre>
        </div>

        <!-- CALCULATE -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">5. CALCULATE()</h4>
            <p class="text-gray-300 mb-2">Most important DAX function. Changes filter context.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">East Sales = CALCULATE([Total Sales], Sales[Region] = "East")</pre>
        </div>

        <!-- FILTER -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">6. FILTER()</h4>
            <p class="text-gray-300 mb-2">Filters rows inside CALCULATE.</p>
<pre class="bg-black text-blue-300 p-3 rounded text-sm">
High Downtime =
CALCULATE(
  [Total Breakdown Hrs],
  FILTER(Breakdown, Breakdown[Hours] > 2)
)
</pre>
        </div>

        <!-- ALL -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">7. ALL()</h4>
            <p class="text-gray-300 mb-2">Removes filters (used for % of total).</p>
<pre class="bg-black text-blue-300 p-3 rounded text-sm">
Sales % =
DIVIDE(
  [Total Sales],
  CALCULATE([Total Sales], ALL(Sales))
)
</pre>
        </div>

        <!-- SUMX -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">8. SUMX()</h4>
            <p class="text-gray-300 mb-2">Row-by-row calculation.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">Energy Cost = SUMX(Power, Power[Units] * Power[Rate])</pre>
        </div>

        <!-- MAX MIN -->
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="text-xl font-semibold text-blue-300">9. MAX() / MIN()</h4>
            <p class="text-gray-300 mb-2">Returns highest or lowest value.</p>
            <pre class="bg-black text-blue-300 p-3 rounded text-sm">Max Output = MAX(Production[Units])</pre>
        </div>

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
      data: { labels:['Revenue'], datasets: [{ data:[9.5], backgroundColor:'#16cca8ff' }] },
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

function setupVisualChooser() {
  const visualData = {
    compare: { title: 'Bar Chart', desc: 'Compare categories.', type: 'bar',
      data: { labels: ['A','B','C'], datasets: [{ data:[450,620,510], backgroundColor:'#22c55e' }] } },
    trend: { title: 'Line Chart', desc: 'Show trends over time.', type: 'line',
      data: { labels: ['Jan','Feb','Mar'], datasets: [{ data:[120,190,150], borderColor:'#34d399' }] } },
    part: { title: 'Donut Chart', desc: 'Show proportions.', type: 'doughnut',
      data: { labels:['North','South'], datasets: [{ data:[300,200], backgroundColor:['#10b981','#34d399'] }] } },
    kpi: { title: 'Card & Gauge', desc: 'Show a KPI.', isCard: true,
      cardData: { value: '5,441', label: 'Avg temp - lower than last...', change: '-0.2', sparklineData: [5.2, 5.3, 5.1, 5.4, 5.5, 5.3, 5.4, 5.6, 5.4, 5.5, 5.4, 5.41] ,backgroundColor:['#10b981','#34d399']} }
  };

  const chartContainer = document.querySelector('.chart-container');
  const titleEl = document.getElementById('visual-title');
  const descEl = document.getElementById('visual-desc');

  document.getElementById('visual-selector').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const type = e.target.dataset.type;
      const config = visualData[type];
      titleEl.textContent = config.title;
      descEl.textContent = config.desc;
      
      if (config.isCard) {
        // Destroy chart if exists
        if (chartInstance) {
          chartInstance.destroy();
          chartInstance = null;
        }
        
        // Create KPI Card
        const card = config.cardData;
        
        chartContainer.innerHTML = `
          <div class="bg-white rounded-lg p-6 border-l-4 border-gray-800 shadow-lg" style="max-width: 350px;">
            <div class="text-sm text-gray-600 mb-3">${card.label}</div>
            <div class="flex items-start justify-between">
              <div class="text-5xl font-bold text-gray-900">${card.value}</div>
              <div class="text-right">
                <div class="text-gray-500 text-sm mb-1">${card.change}</div>
                <canvas id="sparkline-chart" width="120" height="40"></canvas>
              </div>
            </div>
          </div>
        `;
        
        // Create sparkline
        setTimeout(() => {
          const sparkCtx = document.getElementById('sparkline-chart').getContext('2d');
          new Chart(sparkCtx, {
            type: 'line',
            data: {
              labels: card.sparklineData.map((_, i) => i),
              datasets: [{
                data: card.sparklineData,
                borderColor: '#4a5568',
                backgroundColor: 'rgba(74, 85, 104, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 0
              }]
            },
            options: {
              responsive: false,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
              },
              scales: {
                x: { display: false },
                y: { display: false }
              }
            }
          });
        }, 100);
      } else {
        // Create chart
        chartContainer.innerHTML = '<canvas id="visual-chart"></canvas>';
        const ctx = document.getElementById('visual-chart').getContext('2d');
        if (chartInstance) chartInstance.destroy();
        chartInstance = new Chart(ctx, { type: config.type, data: config.data, options: config.options || {} });
      }
    }
  });
}
