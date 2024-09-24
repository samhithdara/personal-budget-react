import React from 'react';

function HomePage() {
  return (

        <main className="center" id="main">
    <div class="page-area">

        <article aria-labelledby="stay-on-track">
            <h1 id="stay-on-track">Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article aria-labelledby="alerts">
            <h1 id="alerts">Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article aria-labelledby="results">
            <h1 id="results">Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they live happier lives... since they spend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article aria-labelledby="chart">
            <h1 id="chart">Chart</h1>
            <p>
                <canvas id="myChart" width="400" height="400" role="img" aria-label="Budget chart"></canvas>
            </p>
        </article>
        <div>
            <h1>D3.js</h1>
            {/* <svg width="460px", height="450px" style="margin: 5px;"></svg> */}
        </div>

    </div>
</main>

  );
}

export default HomePage;