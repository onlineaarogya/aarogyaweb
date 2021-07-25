import Head from 'next/head';
import PropTypes from 'prop-types';
export default function MetaTitle({ title, metaKeyWord, metaDescription }) {
  return (
    <Head>
      <>
        <title>{title}</title>
        <meta name="keywords" content={metaKeyWord} />
        <meta name="description" content={metaDescription} />
      </>
    </Head>
  );
}

MetaTitle.propTypes = {
  title: PropTypes.string.isRequired,
  metaKeyWord: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
};
