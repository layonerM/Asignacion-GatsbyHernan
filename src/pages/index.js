import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
 import Layout from "../components/layout"
import Seo from "../components/seo"
import LogoDataCurso from "../images/Logo-Data-Curso-e1595976981559.png"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown  } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

     <div className="Header1">
      <img src={LogoDataCurso} />
    </div>

  <div >
    
    

  </div>


  </Layout>

)

export default IndexPage
