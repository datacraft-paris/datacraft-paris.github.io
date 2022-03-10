import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Rather inelegant way of loading recent posts
// See https://stackoverflow.com/questions/60289432/docusaurus-v2-recent-blogs-list-for-homepage
import recentPosts from "../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json";



function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <ul >{title}</ul>
      
      <p>{description}</p>
    </div>
  );
}

function HomePageBlock({title,img,description,href}){
  return (
  <Col className={styles.mainCardColumn}>
    <h1 style={{"fontSize":24}}> <Link to={href}>{title}</Link></h1>
    {img && 
      <div style={{paddingLeft:40, paddingRight:40, paddingTop:20, paddingBottom:20}}>
        <img src={useBaseUrl(img)}/>
      </div>
    }
    <p style={{color:"black", marginBottom: 0}}>{description}</p> 
  </Col>
  )
}
/* <-- datacraft style: add in style spec'' color:"#004c23", '' */


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout 
      title={`datacraft - the club for data scientists`} 
      description="datacraft - the club for data scientists. Inside the community" 
      keywords={["datacraft","club","community","Data Science","Machine Learning","Artificial Intelligence"]}
      >
       <header 
        className={clsx('hero hero--primary', styles.heroBanner)} 
        style={{backgroundImage:`url(${useBaseUrl('img/HomePageIllustration_blank.png')})`,backgroundSize:"cover",backgroundPosition: "bottom", minHeight:"calc(100vh - 200px)",zIndex:-1}}
      >
        <div className={clsx("container", styles.card)}>
          <h1 className="hero__subtitle" style={{color:"#0b7c39",fontSize:"40px"}}><img src="img/datacraft_logo_full.png" alt=" " width="250" height="40"/></h1>
          <h1 className="hero__subtitle" style={{color:"black"}}>Welcome to datacraft's blog!</h1>
          <p className="hero__subtitle" style={{color:"black", marginBottom: 0}}>Inside the community of data scientists</p>
        </div>
      </header>
      <main style={{ marginTop:"-40px" }}>
        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Blog" href="/blog" img="img/icons/Search engine _Monochromatic.svg" description="Browse our latest articles and experiments on Data Science & AI"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/World wide web_Monochromatic.svg" description="Discover our open source contributions to the Data Science community"/>
          </Row>
        </div>
        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Our latest blog posts" href="" description={
              <>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {recentPosts.items.slice(0, 5).map((item, index) => (
                    <li key={index}>
                      <a href={`${item.permalink}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            }/>
          </Row>
        </div>
      </main>
    </Layout>
  );
}



export default Home;