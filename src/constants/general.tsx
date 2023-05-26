import Link from 'next/link';
// import p0 from '../components/Common/images/p0.png';
import p1 from '../components/Common/images/p1.png';
import p2 from '../components/Common/images/p2.png';
import p3 from '../components/Common/images/p3.png';
import p4 from '../components/Common/images/p4.png';
// import Github from '../components/Common/Icons/Github';
import Twitter from '../components/Common/Icons/Twitter';
// import YouTube from '../components/Common/Icons/YouTube';

export const META_IMAGE_LINK =
  'https://compute-camp.vercel.app/static/compute-camp-meta.jpg';

export const FOOTER_SOCIALS = [
  // {
  //   alt: 'Github',
  //   url: 'https://github.com',
  //   Icon: Github,
  // },
  {
    alt: 'Twitter',
    url: 'https://twitter.com/computecamp',
    Icon: Twitter,
  },
  // {
  //   alt: 'Youtube',
  //   url: 'https://youtube.com',
  //   Icon: YouTube,
  // },
];

export const FOOTER_LINKS = [
  // {
  //   label: 'About',
  //   url: '#',
  //   targetBlank: false,
  // },
  {
    label: 'Registration',
    url: 'http://lu.ma/compute-camp',
    targetBlank: true,
  },
  {
    label: 'Tickets',
    url: 'https://protocollabs.notion.site/fadc9a37763844769a13ee87234b90f8',
    targetBlank: true,
  },
  {
    label: 'Schedule',
    url: '#schedule',
    targetBlank: false,
  },
  {
    label: 'Participants',
    url: '#participants',
    targetBlank: false,
  },
  {
    label: 'About Belgrade',
    url: '#about-belgrade',
    targetBlank: false,
  },
  {
    label: 'FAQ',
    url: '#faq',
    targetBlank: false,
  },
];

// 1.30-3 Lighting Talks
// 3-5 Workshops
// 5-7 Happy hour
export const SCHEDULE_DAY_1 = [
  {
    type: 'Intro',
    time: '8:00-9.30',
    // label: 'Registration & Breakfast',
    // author: 'John Evens',
    title: 'Registration & Breakfast',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing pulvinar dapibus leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    type: 'Talks',
    time: '9.30-10:00',
    // label: 'Opening Talk',
    // author: 'John Evens',
    title: 'Opening Talk',
    description:
      "Start your event experience on a high note with our engaging opening talk. This session will unveil the overarching theme, highlight the key objectives, and ignite your curiosity for what lies ahead. Don't miss this opportunity to be inspired and motivated from the very beginning.",
  },
  {
    type: 'Talks',
    time: '10:00-12.30',
    // label: 'Keynotes',
    // author: 'John Evens',
    title: 'Keynotes',
    description:
      "Attention, forward-thinkers! Join us as we curate a lineup of industry's vanguards who will share their insights, experiences, and forecasts through captivating keynotes. Don't miss this chance to gain a competitive edge and steer your career towards success.",
  },
  {
    type: 'Break',
    time: '12.30-1.30',
    // label: 'Welcome Talk ',
    // author: 'John Evens',
    title: 'Lunch',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing pulvinar dapibus leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    type: 'Talks',
    time: '1.30-3:00',
    // label: 'Lighting Talks',
    // author: 'John Evens',
    title: 'Lighting Talks',
    description: (
      <>
        Dive into the world of computing as we present a series of lightning talks that
        will leave you inspired and informed.
        <br /> An electrifying showcase of the latest and greatest in computing. Our
        lightning talks will unveil the game-changing breakthroughs, emerging trends, and
        transformative applications that are revolutionizing the industry. Join us to
        witness the future unfold!
      </>
    ),
  },
  {
    type: 'Workshop',
    time: '3:00-5:00',
    // label: 'Workshops',
    // author: 'John Evens',
    title: 'Workshops',
    description:
      'Looking to enhance your skill set and stay ahead of the competition? Our workshops offer a unique opportunity to learn directly from industry practitioners. Discover new methodologies, acquire valuable insights, and leave with actionable strategies that will accelerate your path.',
  },
  {
    type: 'Talks',
    time: '5:00-7:00',
    // label: 'Welcome Talk',
    // author: 'John Evens',
    title: 'Happy hour',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing pulvinar dapibus leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
];

export const SCHEDULE_DAY_2 = [
  {
    type: 'Pre-session',
    time: '8:00-9.30',
    title: 'Breakfast',
  },
  {
    type: 'Talks',
    time: '9:30-12.30',
    title: 'Keynotes',
    description:
      "Attention, forward-thinkers! Join us as we curate a lineup of industry's vanguards who will share their insights, experiences, and forecasts through captivating keynotes. Don't miss this chance to gain a competitive edge and steer your career towards success.",
  },
  {
    type: 'Break',
    time: '12.30-1.30',
    title: 'Lunch',
  },
];

export const MENU_ITEMS = [
  {
    label: 'Registration',
    url: 'http://lu.ma/compute-camp',
    targetBlank: true,
  },
  {
    label: 'Schedule',
    url: '#schedule',
    targetBlank: false,
  },
  {
    label: 'About Belgrade',
    url: '#about-belgrade',
    targetBlank: false,
  },
  {
    label: 'Participants',
    url: '#participants',
    targetBlank: false,
  },
];

export const PARTICIPANTS = [
  {
    name: 'Evgeny Ponomarev',
    image: p2,
    company: 'Fluence Project',
    about: 'Co-founder at Fluence Project',
    // github: 'https://github.com/',
    twitter: 'https://twitter.com/eponomarev',
    // linkedIn: 'https://www.linkedin.com/',
  },
  {
    name: 'Vukašin Vukoje',
    image: p4,
    company: 'web3mine',
    about: 'web3 infrastructure',
    // github: 'https://github.com/',
    // twitter: 'https://twitter.com/?lang=sr',
    linkedIn: 'https://www.linkedin.com/in/vvkio/',
  },
  {
    name: 'Vik K.',
    image: p3,
    company: 'Protocol Labs',
    about: 'Cryptoeconomics Research',
    // github: 'https://github.com/',
    // twitter: 'https://twitter.com/?lang=sr',
    linkedIn: 'https://www.linkedin.com/in/vik-k-b99a4a153',
  },
  {
    name: 'Joshua Bate',
    image: p1,
    company: 'Spool DAO',
    about: 'DeFi / DeSci Guy',
    // github: 'https://github.com/',
    // twitter: 'https://twitter.com/?lang=sr',
    linkedIn: 'https://www.linkedin.com/in/joshua-bate/',
  },
  // {
  //   name: 'Speaker Name',
  //   image: p0,
  //   company: 'Company',
  //   about:
  //     'Praesent commodo its cursus magna, vel scetret gravida at set eget metus. Donec id elit non mi porta gravida at eget metus.',
  //   github: 'https://github.com/',
  //   twitter: 'https://twitter.com/?lang=sr',
  //   linkedIn: 'https://www.linkedin.com/',
  // },
];

export const FAQ = [
  // {
  //   question: 'What is Compute Camp?',
  //   answer:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  // },
  {
    question: 'How is it different than IPFS Thing?',
    answer: 'Compute Camp focus is to gather place for newcomers to the ecosystem.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Compute Camp is for all CS enthusiasts, from database builders, cloud veterans or ',
  },
  {
    question: 'Are there any preferred hotels?',
    answer:
      'We recommend staying in the city center of Belgrade. The event venue is located in a more industrial zone of the city and may not have the best offerings in terms of hotels.',
  },
  {
    question: 'How can I participate?',
    answer: (
      <ul>
        <li>
          Speak:{' '}
          <Link href="https://airtable.com/shrSfIQgLi8fF6zq5" target="_blank">
            Submit your talk here
          </Link>
          .
        </li>
        <li>
          Volunteer: If you&apos;re interested in volunteering at this event, please email
          us at <Link href="mailto:info@compute.camp">info@compute.camp</Link>.
        </li>
        <li>
          Spread the Good Word: Let everyone know how excited you are about Compute Camp.
          Be sure to tag us @ computecamp on Twitter and @ computecamp on Bluesky.
        </li>
        <li>
          Sponsor: Let us know if you’re interested in sponsoring this event. Email us for
          more information at{' '}
          <Link href="mailto:info@compute.camp">info@compute.camp</Link>.
        </li>
      </ul>
    ),
  },
  {
    question: 'Will there be recordings or live virtual sessions that I can attend?',
    answer:
      'Recordings will be uploaded to our IPFS Youtube channel. Please check there for any updates. There will not be any live streaming.',
  },
  {
    question: 'What if I don’t want to be recorded or photographed?',
    answer: (
      <ul>
        <li>
          There will be different colored lanyards available for you if you do not wish to
          be captured on photo or video.
        </li>
        <li>
          You can find our Event photo/video release{' '}
          <Link
            href="https://docs.google.com/document/d/1rSzLZ9igZumUCt9hvYiBeYn54_m2PMM8/edit?usp=sharing&ouid=116293820701550843517&rtpof=true&sd=true"
            target="_blank"
            aria-label="Event photo orvideo"
            title="Event photo orvideo"
            aria-haspopup="false"
          >
            here
          </Link>
          .
        </li>
      </ul>
    ),
  },
  {
    question: 'How do I contact the organizers?',
    answer: (
      <>
        You can reach us at <Link href="mailto:info@compute.camp">info@compute.camp</Link>
      </>
    ),
  },
  {
    question: 'What is the Covid-19 policy?',
    answer: (
      <ul>
        <li>Masks and testing are optional and at your discretion.</li>
        <li>
          If you are presenting any symptoms of being sick or have come in contact with
          someone who has presented symptoms or tested positive in the last five days,
          please do not attend the event for your own and all other attendees&apos; health
          and safety. Rest up and feel better!
        </li>
      </ul>
    ),
  },
  {
    question: 'Code of Conduct',
    answer: (
      <ul>
        <li>
          We will be following the IPFS{' '}
          <Link
            href="https://github.com/ipfs/community/blob/master/code-of-conduct.md"
            target="_blank"
          >
            Code of Conduct
          </Link>
          , and the IPFS Code of Conduct{' '}
          <Link
            href="https://github.com/ipfs/community/blob/master/code-of-conduct-for-events.md"
            target="_blank"
          >
            Events Addendum
          </Link>{' '}
          as part of the above CoC.
        </li>
        <li>
          If you experience any violation in the Code of Conduct, please email
          <Link href="mailto:info@compute.camp">info@compute.camp</Link> or directly slack
          @nicole.schafer or @milica.jokic on Filecoin Slack.
        </li>
        <li>
          <Link
            href="https://docs.google.com/document/d/1TZtlV1nAVpvS0SS6Q8vmBz_fZ_Yow_dYyVCEvnbE9ss/edit?usp=sharing"
            target="_blank"
            aria-label="General Liability"
          >
            General Liability
          </Link>
        </li>
      </ul>
    ),
  },
];
