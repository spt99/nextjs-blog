import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Welcome to My World!</h2>
        <p>

          Hey there! I'm Sakshi Pandit, and I'm thrilled to have you here.
          If you love stories, adventures, and a bit of everyday magic, you're in the right place.

        </p>
        <h2 className={utilStyles.headingLg}>A Little About Me</h2>
        <p>

          So, who am I? Well, I'm a bit of everything! By day, I'm a software developer diving deep into
          the world of C++ at Dassault Systèmes. By night (and pretty much any other free moment),
          I'm an explorer at heart. I've got a background in mechanical engineering with an
          MTech from NIT Jaipur, but my passions extend far beyond the confines of my professional life.


        </p>
        <h2 className={utilStyles.headingLg}>My Passions</h2>
        <p>
          <li><h className={utilStyles.headingMd}><b>Travel:</b></h></li>
          <p>

            Nothing excites me more than packing a bag and heading off to explore new places.
            .Whether it's a bustling city or a serene countryside, every destination has a story to tell.

          </p>
          <Image
            priority
            src="/images/travel.jpg"
            height={500}
            width={600}
            alt=""
          />
          <p>

            Over the years, I’ve had the chance to explore a diverse array of cities across India,
            each offering its own unique blend of culture, history, and beauty.
            My travels have taken me from the serene hills of Mount Abu and Shimla to the vibrant
            streets of Mumbai and Hyderabad. I’ve wandered through the royal heritage of Udaipur and Jaipur,
            soaked in the lively atmosphere of Pune and Indore, and marveled at the architectural wonders in
            Agra and Delhi.


          </p>
          <Image
            priority
            src="/images/life.jpg"
            height={500}
            width={500}
            alt=""
          />
          <p>

            Manali and Kasol have provided me with breathtaking landscapes and tranquil moments,
            while Mathura and Panchmadi offered rich cultural experiences. In the bustling cities
            of Ahmedabad and Bhopal, I discovered the heart of regional traditions, and the industrial
            hubs of Surat and Hazira gave me a glimpse into the dynamic side of Indian industry.

          </p>
          <p>

            Each city has left its mark on me, contributing to a tapestry of memories and
            stories that I cherish deeply.


          </p>

          <br />
          <li><b>Cooking:</b></li>
          <p>
            I love experimenting in the kitchen.
            From traditional recipes to new culinary creations, cooking is my therapy.</p>
          <Image
            priority
            src="/images/cooking.jpg"
            height={500}
            width={700}
            alt=""
          />
          <br />
          <li><b>Movies and Music:</b></li>
          <p>
            A good movie or a soulful song can transport me to another world.
            I enjoy a wide range of genres and always look for something new to watch or listen to.
          </p>
          <br />
          <li><b>Photography and Painting:</b> </li><p>

            Capturing moments through my lens or expressing my thoughts on canvas brings me immense joy.</p>
          <Image
            priority
            src="/images/photography.jpg"
            height={500}
            width={600}
            alt=""
          />
          <br />
          <li><b>Life's Little Moments:</b> </li>
          <p>

            Whether it's a quiet morning with
            a cup of coffee or a spontaneous road trip, I believe in savoring life's little moments.

          </p>
        </p>

      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}