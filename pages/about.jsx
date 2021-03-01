import { useTranslation } from "next-i18next";
import React from "react";

function AboutPage({ hello }) {
  const { t } = useTranslation('common');

  return <div >
    <button>{t("about-button-hello")}</button>
    <span>{hello}</span>;
  </div>
}


export async function getStaticProps(context) {
  console.log('-----------')
  console.log(context)
  console.log('-----------')

  return {
    props: {
      hello: context.locale === 'es' ? 'Hola' : 'Hello',
    }
  }
}


export default AboutPage;
