import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LongCard from "../components/LongCard.js";


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Open-source contributions"
      description="Discover our open source contributions to the Data Science community"
      keywords={["datacraft", "Data Science", "Machine Learning", "Artificial Intelligence", "Open Source"]}
    >
         
    <div class="container margin-vert--lg">
        <div class="row">
            <div class="col col--12">
            <h1>Open source contributions</h1>
            <p>
            This page gathers the Github links of all open-source projects developed during datacraft workshops.<br/>
            <a href="mailto:contact@datacraft.paris">Email us</a> if you have questions or wish to contribute.
            </p>
            </div>
        </div>
      <section>
          <LongCard category="Python library" date="2021-09" title="EthicalAI" description="Ethical AI toolkit for Data Scientists to study, understand and mitigate bias in your datasets and algorithms in development and production - Developed in collaboration with Danone, Sorbonne University within Data Scientist club datacraft" href="https://github.com/datacraft-paris/ethical-ai-toolkit" src="img/opensource/ethicalai_2.png"/>
      </section>
    </div>
  
    </Layout>
  );
}

export default Home;


/*            <span className="gold">technology-agnostic</span> company.<br/>*/