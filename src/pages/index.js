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
    <p style={{color:"white", marginBottom: 0}}>{description}</p> 
  </Col>
  )
}
/* <-- datacraft style: add in style spec'' color:"#004c23", '' */


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout 
      title={'This is my text 2'}  /*{`datacraft - the club for data scientists`}*/ 
      description="This is my text 3" /*datacraft - the club for data scientists. Inside the community"*/ /*This here changes the preview on social media when sharing the blog URL.*/
      keywords={["datacraft","club","community","Data Science","Machine Learning","Artificial Intelligence"]}
      >
       <header 
        className={clsx('hero hero--primary', styles.heroBanner)} 
        style={{backgroundImage:`url(${useBaseUrl('img/HomePageIllustration6.jpg')})`,backgroundSize:"cover", backgroundPosition: "bottom", minHeight:"calc(100vh - 300px)",zIndex:-1}}
      >
        <div className={clsx("container", styles.card)}>
          <h1 className="hero__subtitle" style={{color:"#0b7c39", textAlign:"center"}}><img src="img/datacraft_logo_full.png" alt=" " width="350" height="55"/></h1>
          <h1 className="hero__subtitle" style={{color:"#004c23", fontSize:"50px", textAlign:"center"}}>Welcome to datacraft's blog!</h1>
          <p className="hero__subtitle" style={{color:"#004c23", marginBottom:0, fontSize:"40px", textAlign:"center"}}>Inside the data scientists’ community</p>
        </div>
      </header>
      <main style={{ marginTop:"70px" }}>
        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Blog" href="/blog" img="img/icons/datacraft blog petit.png" description="Browse our latest articles and experiments on data science & AI"/>
            <HomePageBlock title="Open Source" href="/opensource" img="img/icons/datacraft open source petit.png" description="Discover our open source contributions to the data science community"/>
          </Row>
        </div>
        <div className={clsx("container", styles.card)}>
          <Row>
            <HomePageBlock title="Our latest blog posts" href="/blog" description={
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