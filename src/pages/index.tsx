import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"

import s from "./index.module.css"
import { FC } from "react"

const Home: FC = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout>
      <div className={s.container}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </Layout>
  )
}

export default Home
