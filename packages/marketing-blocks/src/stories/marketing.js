import React from 'react';
import { storiesOf } from '@storybook/react';

import { NavBar1 } from '../components/marketing/navbars/NavBar1';
import { NavBar2 } from '../components/marketing/navbars/NavBar2';
import { NavBar3 } from '../components/marketing/navbars/NavBar3';
import { NavBar4 } from '../components/marketing/navbars/NavBar4';

import { Hero1 } from '../components/marketing/heros/Hero1';
import { Hero2 } from '../components/marketing/heros/Hero2';
import { Hero3 } from '../components/marketing/heros/Hero3';
import { Hero4 } from '../components/marketing/heros/Hero4';
import { Hero5 } from '../components/marketing/heros/Hero5';

import { Cta1 } from '../components/marketing/ctas/Cta1';
import { Cta2 } from '../components/marketing/ctas/Cta2';
import { Cta3 } from '../components/marketing/ctas/Cta3';
import { Cta4 } from '../components/marketing/ctas/Cta4';

import { Banner1 } from '../components/marketing/banners/Banner1';
import { Banner2 } from '../components/marketing/banners/Banner2';
import { Banner3 } from '../components/marketing/banners/Banner3';

import { Newsletter1 } from '../components/marketing/newsletter/Newsletter1';
import { Newsletter2 } from '../components/marketing/newsletter/Newsletter2';

import { Testimonial1 } from '../components/marketing/testimonial/Testimonial1';
import { Testimonial2 } from '../components/marketing/testimonial/Testimonial2';

import { Pricing1 } from '../components/marketing/pricing/Pricing1';
import { Pricing2 } from '../components/marketing/pricing/Pricing2';
import { Pricing3 } from '../components/marketing/pricing/Pricing3';
import { Pricing4 } from '../components/marketing/pricing/Pricing4';

import { Feature1 } from '../components/marketing/features/Feature1';
import { Feature2 } from '../components/marketing/features/Feature2';
import { Feature3 } from '../components/marketing/features/Feature3';
import { Feature4 } from '../components/marketing/features/Feature4';
import { Feature5 } from '../components/marketing/features/Feature5';

import { Footer1 } from '../components/marketing/footers/Footer1';
import { Footer2 } from '../components/marketing/footers/Footer2';
import { Footer3 } from '../components/marketing/footers/Footer3';
import { Footer4 } from '../components/marketing/footers/Footer4';
import { Footer5 } from '../components/marketing/footers/Footer5';

import { select, text, boolean, object } from '@storybook/addon-knobs';

storiesOf('marketing/NavBars', module).add('NavBar1', () => {
  const styledCSS = text('styledCSS', 'background-color: #f8f9fa;');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const closable = boolean('closable', true);
  const mask = boolean('mask', true);
  const maskClosable = boolean('maskClosable', true);
  const title = text('title', 'Menu');
  const width = text('width', '256');
  const zIndex = text('zIndex', '1000');
  const placement = select('placement', ['right', 'left'], 'right');
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const links = object('links', [
    { id: 1, type: 'link', href: '/', text: 'Home', active: true },
    { id: 2, type: 'link', href: '/', text: 'Features' },
    { id: 3, type: 'link', href: '/', text: 'Pricing' },
    { id: 4, type: 'link', href: '/', text: 'Services' },
    { id: 5, type: 'link', href: '/', text: 'About Us' },
    {
      id: 6,
      type: 'button',
      href: '/',
      text: 'Get Started',
      variation: 'primarySubtle'
    }
  ]);
  return (
    <NavBar1
      styledCSS={styledCSS}
      fixed={fixed}
      sticky={sticky}
      closable={closable}
      mask={mask}
      maskClosable={maskClosable}
      title={title}
      width={parseInt(width)}
      zIndex={parseInt(zIndex)}
      placement={placement}
      {...logoAttr}
      links={links}
    />
  );
});

storiesOf('marketing/NavBars', module).add('NavBar2', () => {
  const styledCSS = text('styledCSS', 'background-color: #f8f9fa;');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const closable = boolean('closable', true);
  const mask = boolean('mask', true);
  const maskClosable = boolean('maskClosable', true);
  const title = text('title', 'Menu');
  const width = text('width', '256');
  const zIndex = text('zIndex', '1000');
  const placement = select('placement', ['right', 'left'], 'right');
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const leftLinks = object('leftLinks', [
    { id: 1, href: '/', text: 'Home', active: true },
    { id: 2, href: '/', text: 'Features' },
    { id: 3, href: '/', text: 'Pricing' },
    { id: 4, href: '/', text: 'Services' },
    { id: 5, href: '/', text: 'About Us' }
  ]);
  const rightLinks = object('rightLinks', [
    {
      id: 1,
      href: '/',
      text: 'Login',
      variation: { drawerVariation: 'light', normal: 'transparent' },
      color: 'primary'
    },
    {
      id: 2,
      href: '/',
      text: 'Get Started',
      variation: 'fill',
      color: 'primary'
    }
  ]);
  return (
    <NavBar2
      styledCSS={styledCSS}
      fixed={fixed}
      sticky={sticky}
      closable={closable}
      mask={mask}
      maskClosable={maskClosable}
      title={title}
      width={parseInt(width)}
      zIndex={parseInt(zIndex)}
      placement={placement}
      {...logoAttr}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
  );
});

storiesOf('marketing/NavBars', module).add('NavBar3', () => {
  const styledCSS = text('styledCSS', 'background-color: #f8f9fa;');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const timeout = text('timeout', '350');
  const leftLinks = object('leftLinks', [
    { id: 1, href: '/', text: 'Home', active: true },
    { id: 2, href: '/', text: 'Features' },
    { id: 3, href: '/', text: 'Pricing' },
    { id: 4, href: '/', text: 'Services' }
  ]);
  const rightLinks = object('rightLinks', [
    { id: 1, href: '/', text: 'Sign in' },
    { id: 2, href: '/', text: 'Sign up' },
    { id: 3, href: '/', text: 'Free Trail' }
  ]);
  return (
    <NavBar3
      styledCSS={styledCSS}
      fixed={fixed}
      sticky={sticky}
      {...logoAttr}
      timeout={parseInt(timeout)}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
  );
});

storiesOf('marketing/NavBars', module).add('NavBar4', () => {
  const styledCSS = text('styledCSS', 'background-color: #f8f9fa;');
  const fixed = select('fixed', ['top', 'bottom'], null);
  const sticky = boolean('sticky', false);
  const logo = text('logo', '');
  const logoAttr =
    typeof logo === 'string' && logo.length > 0 ? { logo } : null;
  const links = object('links', [
    { id: 1, href: '/', text: 'Home', active: true },
    { id: 2, href: '/', text: 'Features' },
    { id: 3, href: '/', text: 'Pricing' },
    { id: 4, href: '/', text: 'Services' },
    { id: 5, href: '/', text: 'About Us' }
  ]);
  return (
    <NavBar4
      styledCSS={styledCSS}
      fixed={fixed}
      sticky={sticky}
      {...logoAttr}
      links={links}
    />
  );
});

storiesOf('marketing/Heros', module).add(
  'Hero1',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;
    const src = text('src', 'https://i.imgur.com/PeGpFZu.png');
    const shift = boolean('shift', false);
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);
    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Signup',
        variation: 'whiteSecondary'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signin',
        variation: 'fill'
      }
    ]);
    return (
      <Hero1
        src={src}
        shift={shift}
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Heros', module).add(
  'Hero2',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;

    const majorWords = text('majorWords', 'Turn ideas to live web');
    const minorWords = text('minorWords', 'experiences');
    const description = text('description', desc);

    const input = object('input', {
      placeholder: 'Enter your email'
    });

    const button = object('button', {
      text: 'Notify me',
      variation: 'fill',
      color: 'primary'
    });
    const newsletterText = text(
      'newsletterText',
      `Sign up to get notification when it's ready.`
    );

    const policyText = text(
      'policyText',
      'We care about the protection of your data. Read Privacy Policy'
    );

    const illustration = text(
      'illustration',
      'https://i.imgur.com/v4uQCOe.png'
    );
    const shift = boolean('shift', false);
    return (
      <Hero2
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        input={input}
        button={button}
        newsletterText={newsletterText}
        illustration={illustration}
        policyText={policyText}
        shift={shift}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Heros', module).add(
  'Hero3',
  () => {
    const desc = `When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.`;

    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Signup',
        variation: 'whiteSecondary'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signin',
        variation: 'fill'
      }
    ]);

    const backgroundImageSource = text(
      'backgroundImageSource',
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40'
    );

    const backgroundImageAttachment = boolean(
      'backgroundImageAttachment',
      true
    );

    const inverted = boolean('inverted', true);

    return (
      <Hero3
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
        backgroundImageSource={backgroundImageSource}
        backgroundImageAttachment={backgroundImageAttachment}
        inverted={inverted}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Heros', module).add(
  'Hero4',
  () => {
    const desc = `When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.`;

    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Signup',
        variation: 'whiteSecondary'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signin',
        variation: 'fill'
      }
    ]);

    const video = object('video', {
      src: 'https://static.videezy.com/system/resources/previews/000/018/159/original/herbst-version2.mp4',
      muted: true,
      autoPlay: true,
      loop: true,
      playsInline: true
    });

    const invertedText = boolean('invertedText', true);

    const overlay = object('overlay', {
      show: false,
      backgroundColor: 'rgba(0, 0, 0, .85)'
    });

    return (
      <Hero4
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        links={links}
        video={video}
        invertedText={invertedText}
        overlay={overlay}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Heros', module).add(
  'Hero5',
  () => {
    const desc = `Website building is chaotic. Across teams, there are design apps, coding editors, prototyping tools, tickets, style guides. When you design with our tool, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step. Go from all-over-the-place handoffs, to building cozily hands-on.`;

    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const description = text('description', desc);

    const src = text('src', 'https://i.imgur.com/crDFOzg.jpg');

    const links = object('links', [
      {
        id: 1,
        href: '/signin',
        text: 'Get Started',
        variation: 'fill'
      },
      {
        id: 2,
        href: '/signup',
        text: 'Signup',
        variation: 'primarySubtle'
      }
    ]);

    const simple = boolean('simple', false);

    return (
      <Hero5
        majorWords={majorWords}
        minorWords={minorWords}
        description={description}
        src={src}
        links={links}
        simple={simple}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Features', module).add(
  'feature1',
  () => {
    const majorWords = text('majorWords', 'Web Design Platform');
    const minorWords = text('minorWords', 'for All Creatives');
    const subText = text('subText', 'Learn more about Product unique features');

    const features = object('features', [
      {
        id: 1,
        icon: 'rss',
        title: 'Faster Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/',
          variation: 'fill'
        }
      },
      {
        id: 2,
        icon: 'bar-chart',
        title: 'Linear Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/',
          variation: 'fill'
        }
      },
      {
        id: 3,
        icon: 'activity',
        title: 'J-Curve Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: 'arrow-right',
          href: '/',
          variation: 'fill'
        }
      }
    ]);

    // Rect element
    const svg = `<svg viewBox="0 0 126 70" width="126px" height="70px">
        <path
          fill="currentColor"
          d="M.5 34.17h37.7v1.05H.5zm65.02-9.95c2.39.78 5.37 0 7.19 1.71s1.65 4.64 2.17 7.11 1.33 4.9.89 7.38c-.46 2.68-1.23 5.67-3.44 7.24s-5.22 1-7.91.79a19.9 19.9 0 01-6.09-2c-1.83-.79-3.79-1.38-5.15-2.86a12.07 12.07 0 01-2.45-5.4 12.39 12.39 0 01-.38-6.09c.54-2.05 2.08-3.57 3.38-5.24 1.55-2 2.53-5 5-5.51s4.41 2.09 6.79 2.87zm22.28 9.95h37.7v1.05H87.8z"
        />
      </svg>`;
    const separator = text('separator', svg);

    const ctaText = text(
      'subText',
      'Some things just feel impossible to build in a performant way. Click Here!'
    );

    return (
      <Feature1
        majorWords={majorWords}
        minorWords={minorWords}
        subText={subText}
        features={features}
        separator={separator}
        ctaText={ctaText}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Features', module).add(
  'feature2',
  () => {
    const title = text('title', 'Fasten your seat belts');
    const subTitle = text(
      'subTitle',
      'The unique features of the app are waiting for you'
    );

    const features = object('features', [
      {
        id: 1,
        icon: 'rss',
        title: 'Faster Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 2,
        icon: 'bar-chart',
        title: 'Linear Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        active: true
      },
      {
        id: 3,
        icon: 'activity',
        title: 'J-Curve Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 4,
        icon: 'git-merge',
        title: 'Excremental Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 5,
        icon: 'shuffle',
        title: 'Constant Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      },
      {
        id: 6,
        icon: 'layers',
        title: 'Level field Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      }
    ]);

    const svg = `<svg viewBox="0 0 126 70" width="126px" height="70px">
        <path
          d="M119.37 44.09c-2.2 0-3.45-2.46-6.46-8.41-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67-3 6-4.27 8.41-6.47 8.41s-3.45-2.46-6.46-8.41c-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67L.16 34.32c3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67 3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67l2.68 1.36c-3.02 5.95-4.27 8.41-6.47 8.41z"
          fill="currentColor"
        />
      </svg>`;

    const separator = text('separator', svg);

    return (
      <Feature2
        title={title}
        subTitle={subTitle}
        features={features}
        separator={separator}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Features', module).add(
  'feature3',
  () => {
    const title = text('title', 'Our Features');
    const subtitle = text('subtitle', 'Awesome features of our Tools');

    const features = object('features', [
      {
        id: 1,
        icon: 'database',
        title: 'Supportive Faster Growth',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 2,
        icon: 'code',
        title: 'Blazing Fast',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 3,
        icon: 'clock',
        title: 'More Opportunities',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 4,
        icon: 'cast',
        title: 'Larger Profits',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 5,
        icon: 'filter',
        title: 'Better Customer Service',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 6,
        icon: 'film',
        title: 'Huge Revenues',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      }
    ]);

    const separator = object('separator', { show: true });

    return (
      <Feature3
        title={title}
        subtitle={subtitle}
        features={features}
        separator={separator}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Features', module).add(
  'feature4',
  () => {
    const title = text('title', 'Our Features');
    const subtitle = text('subtitle', 'Awesome features of our Tools');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
    );

    const features = object('features', [
      {
        id: 1,
        icon: 'database',
        title: 'Supportive Faster Growth',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 2,
        icon: 'code',
        title: 'Blazing Fast',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 3,
        icon: 'clock',
        title: 'More Opportunities',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 4,
        icon: 'cast',
        title: 'Larger Profits',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 5,
        icon: 'filter',
        title: 'Better Customer Service',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      },
      {
        id: 6,
        icon: 'film',
        title: 'Huge Revenues',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
      }
    ]);

    return (
      <Feature4
        title={title}
        subtitle={subtitle}
        description={description}
        features={features}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Features', module).add(
  'feature5',
  () => {
    const title = text('title', 'Creative features with optimal choices');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.'
    );
    const typeA = object('typeA', {
      title: 'We takes away the hard process',
      description:
        "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
      shift: false,
      features: [
        {
          id: 1,
          icon: 'database',
          title: 'Marketing Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 2,
          icon: 'code',
          title: 'Website Optimization rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 3,
          icon: 'clock',
          title: 'SEO Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        }
      ]
    });
    const typeB = object('typeB', {
      title: 'Always in the loop',
      description:
        "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
      shift: true,
      features: [
        {
          id: 1,
          icon: 'database',
          title: 'Marketing Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 2,
          icon: 'code',
          title: 'Website Optimization rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        },
        {
          id: 3,
          icon: 'clock',
          title: 'SEO Analysis rates',
          description:
            'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
        }
      ]
    });
    return (
      <Feature5
        title={title}
        description={description}
        typeA={typeA}
        typeB={typeB}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/PricingPlans', module).add(
  'Pricing1',
  () => {
    const majorWords = text('majorWords', 'Plans');
    const minorWords = text('minorWords', 'Extended');
    const subTitle = text('subTitle', 'Keep Track Of Plans Wherever You Are');
    const packages = object('packages', [
      {
        id: 1,
        name: 'STARTER',
        expiration: '7 DAYS',
        currency: '$',
        price: '0',
        button: {
          text: 'Get Started',
          variation: 'primarySubtle'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ]
      },
      {
        id: 2,
        name: 'MEDIATOR',
        expiration: 'PER MONTH',
        currency: '$',
        price: '250',
        button: {
          text: 'Get Started',
          variation: 'fill'
        },
        badgeText: 'Most Popular',
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ]
      },
      {
        id: 3,
        name: 'PROFESSIONAL',
        expiration: 'PER MONTH',
        currency: '$',
        price: '350',
        button: {
          text: 'Get Started',
          variation: 'white'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Access to the content'
          },
          {
            id: 2,
            text: 'Fully Secure Online Backup'
          },
          {
            id: 3,
            text: 'One Year Round the clock stop'
          },
          {
            id: 4,
            text: 'Free complimentary lanyard'
          }
        ]
      }
    ]);
    const bar = object('bar', { show: true, animation: false });
    const cta = object('cta', {
      text: 'We are offering a 14-days trail Please check it.',
      link: {
        href: '/',
        text: 'Learn more',
        variation: 'white'
      }
    });

    return (
      <Pricing1
        majorWords={majorWords}
        minorWords={minorWords}
        subTitle={subTitle}
        packages={packages}
        bar={bar}
        cta={cta}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/PricingPlans', module).add(
  'Pricing2',
  () => {
    const title = text('title', 'Keep your journey wherever');
    const subText = text('subText', 'PRICING PLANS');
    const description = text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );
    const links = object('links', [
      {
        id: 1,
        href: '/',
        variation: 'whiteSecondary',
        text: 'How it works'
      },
      {
        id: 2,
        href: '/',
        variation: 'fill',
        text: ' Get Started'
      }
    ]);
    const packages = object('packages', [
      {
        id: 1,
        name: 'STARTER',
        expireCode: 'mo',
        currency: '$',
        price: '180',
        button: {
          text: 'Get Started',
          variation: 'fill'
        },
        modules: [
          {
            id: 1,
            title: 'Web Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 2,
            title: 'SEO / Search Engine',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 3,
            title: 'Mobile Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'PROFESSIONAL',
        expireCode: 'mo',
        currency: '$',
        price: '250',
        button: {
          text: 'Get Started',
          variation: 'whiteSecondary'
        },
        modules: [
          {
            id: 1,
            title: 'Web Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 2,
            title: 'SEO / Search Engine',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          },
          {
            id: 3,
            title: 'Mobile Development',
            features: [
              {
                id: 1,
                text: 'Unlimited Access the content'
              },
              {
                id: 2,
                text: 'Fully Secure Online Backup'
              },
              {
                id: 3,
                text: 'One Year Round the clock stop'
              },
              {
                id: 4,
                text: 'Free complimentary lanyard'
              }
            ]
          }
        ]
      }
    ]);

    return (
      <Pricing2
        title={title}
        subText={subText}
        description={description}
        packages={packages}
        links={links}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/PricingPlans', module).add(
  'Pricing3',
  () => {
    const title = text('title', 'Simple plan for professionals');
    const subText = text(
      'subText',
      `If you’re not satisfied, contact us within the first 14 days and we’ll send you a full refund.`
    );
    const plan = object('plan', {
      id: 1,
      name: 'Lifetime Membership',
      description:
        'We have a wide range of plans to fit your goals and budget. Check out a free trial to see what works for you and then pay monthly. It totally depends upon you.',
      separatorText: `WHAT'S INCLUDED`,
      sets: [
        {
          id: 1,
          name: 'set-1',
          features: [
            {
              id: 1,
              text: 'Self-paced and flexible scheduling',
              icon: 'check-circle'
            },
            {
              id: 2,
              text: 'Access to new beta features',
              icon: 'check-circle'
            }
          ]
        },
        {
          id: 2,
          name: 'set-2',
          features: [
            {
              id: 1,
              text: 'Interactive practice sessions',
              icon: 'check-circle'
            },
            {
              id: 2,
              text: 'Dedicated customer success team',
              icon: 'check-circle'
            }
          ]
        }
      ],
      planTitle: 'Pay once, own it forever',
      currency: 'USD',
      currencySymbol: '$',
      price: '349',
      button: {
        text: 'Get Access',
        variation: 'fill',
        color: 'secondary'
      },
      policyLink: {
        href: '/',
        text: 'Learn about our membership policy.'
      },
      extra: 'Get a free sample (20MB)'
    });

    return <Pricing3 title={title} subText={subText} plan={plan} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/PricingPlans', module).add(
  'Pricing4',
  () => {
    const subtitle = text('subtitle', 'PRICING PLANS');
    const majorText = text(
      'majorText',
      `The right price for you, whoever you are`
    );
    const minorText = text(
      'minorText',
      `If you’re not satisfied, contact us within the first 14 days and we’ll email you.`
    );
    const packages = object('packages', [
      {
        id: 1,
        badgeText: 'STANDARD',
        currency: '$',
        price: '49',
        expireCode: 'mo',
        description:
          'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
        features: [
          {
            id: 1,
            text: 'Self-paced and flexible scheduling',
            icon: 'check'
          },
          {
            id: 2,
            text: 'Interactive practice sessions',
            icon: 'check'
          },
          {
            id: 3,
            text: 'Access to new beta features',
            icon: 'check'
          },
          {
            id: 4,
            text: 'Dedicated customer success team',
            icon: 'check'
          }
        ],
        button: {
          text: 'Get Started',
          variation: 'fill',
          color: 'secondary'
        }
      },
      {
        id: 2,
        badgeText: 'ENTERPRISE',
        currency: '$',
        price: '79',
        expireCode: 'mo',
        description:
          'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
        features: [
          {
            id: 1,
            text: 'Self-paced and flexible scheduling',
            icon: 'check'
          },
          {
            id: 2,
            text: 'Interactive practice sessions',
            icon: 'check'
          },
          {
            id: 3,
            text: 'Access to new beta features',
            icon: 'check'
          },
          {
            id: 4,
            text: 'Dedicated customer success team',
            icon: 'check'
          }
        ],
        button: {
          text: 'Get Started',
          variation: 'fill',
          color: 'secondary'
        }
      }
    ]);
    const cta = object('cta', {
      text: `Get a full access to all of standard license features and much more for solo projects that make less than $20k gross revenue for $29. `,
      badgeText: 'DISCOUNTED',
      link: {
        href: '/',
        text: 'Buy Discounted License',
        variation: 'white'
      }
    });

    return (
      <Pricing4
        subtitle={subtitle}
        majorText={majorText}
        minorText={minorText}
        packages={packages}
        cta={cta}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Ctas', module).add(
  'cta1',
  () => {
    const ctaText = text(
      'ctaText',
      'We are offering a 14-days trail. You can purchase Stack for $18 USD.'
    );

    const badgeText = text('badgeText', 'Hot Sale');
    return <Cta1 ctaText={ctaText} badgeText={badgeText} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Ctas', module).add(
  'cta2',
  () => {
    const ctaText = text('text', 'Purchase Stack now and get lifetime');
    const description = text(
      'description',
      'Each purchase of Stack comes with six months free support — and a lifetime of free content and bug-fix updates.'
    );
    const links = object('links', [
      { id: 1, href: '/', text: 'Join us', variation: 'primarySubtle' },
      { id: 2, href: '/', text: 'Buy now', variation: 'white' }
    ]);

    return <Cta2 text={ctaText} description={description} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Ctas', module).add(
  'cta3',
  () => {
    const majorText = text('majorText', 'Ready to dive in?');
    const minorText = text('minorText', 'Start your free trial today.');
    const links = object('links', [
      {
        id: 1,
        href: '/',
        text: 'Get Started',
        variation: 'fill',
        color: 'primary'
      },
      { id: 2, href: '/', text: 'Sign up', variation: 'primarySubtle' }
    ]);

    return <Cta3 majorText={majorText} minorText={minorText} links={links} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Ctas', module).add(
  'cta4',
  () => {
    const majorText = text('majorText', `We're here to help`);
    const minorText = text('minorText', 'Planning, Stabilizing and Work');
    const description = text(
      'description',
      `We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry standard dummy text ever since the 1500s and used by everywhere.`
    );
    const link = object('link', {
      href: '/',
      text: 'Visit the help center',
      icon: 'external-link',
      variation: 'white',
      color: 'primary'
    });
    const backgroundImage = text(
      'backgroundImage',
      'https://i.imgur.com/fcLy370.jpg'
    );
    const shift = boolean('shift', false);
    return (
      <Cta4
        majorText={majorText}
        minorText={minorText}
        description={description}
        link={link}
        backgroundImage={backgroundImage}
        shift={shift}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Footers', module).add(
  'footer1',
  () => {
    const colApi = object('colApi', {
      lg: 3,
      md: 4,
      sm: 4
    });
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 UI-Kit, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 1, href: '/pricing', text: 'Pricing' },
          { id: 2, href: '/documentation', text: 'Documentation' },
          { id: 3, href: '/guides', text: 'Guides' },
          { id: 4, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 1, href: '/claim', text: 'Claim' },
          { id: 2, href: '/privacy', text: 'Privacy' },
          { id: 3, href: '/terms', text: 'Terms' }
        ]
      }
    ]);
    return <Footer1 colApi={colApi} colCopyright={colCopyright} cols={cols} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Footers', module).add(
  'footer2',
  () => {
    const colApi = object('colApi', {
      lg: 3,
      md: 4,
      sm: 4
    });
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 UI-Kit, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 1, href: '/pricing', text: 'Pricing' },
          { id: 2, href: '/documentation', text: 'Documentation' },
          { id: 3, href: '/guides', text: 'Guides' },
          { id: 4, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 1, href: '/claim', text: 'Claim' },
          { id: 2, href: '/privacy', text: 'Privacy' },
          { id: 3, href: '/terms', text: 'Terms' }
        ]
      }
    ]);

    return (
      <Footer2
        colApi={colApi}
        colCopyright={colCopyright}
        cols={cols}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Footers', module).add(
  'footer3',
  () => {
    const colApi = object('colApi', {
      lg: 3,
      md: 4,
      sm: 4
    });
    const colCopyright = object('colCopyright', {
      logo: '',
      text: '© 2020 UI-Kit, Inc. All rights reserved'
    });
    const cols = object('cols', [
      {
        title: 'Company',
        links: [
          { id: 1, href: '/about', text: 'About' },
          { id: 2, href: '/blog', text: 'Blog' },
          { id: 3, href: '/jobs', text: 'Jobs' },
          { id: 4, href: '/press', text: 'Press' }
        ]
      },
      {
        title: 'Support',
        links: [
          { id: 1, href: '/pricing', text: 'Pricing' },
          { id: 2, href: '/documentation', text: 'Documentation' },
          { id: 3, href: '/guides', text: 'Guides' },
          { id: 4, href: '/api-status', text: 'API Status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { id: 1, href: '/claim', text: 'Claim' },
          { id: 2, href: '/privacy', text: 'Privacy' },
          { id: 3, href: '/terms', text: 'Terms' }
        ]
      }
    ]);

    return (
      <Footer3
        colApi={colApi}
        colCopyright={colCopyright}
        cols={cols}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Footers', module).add(
  'footer4',
  () => {
    const copyrightText = text(
      'copyrightText',
      `© 2020 UI-Kit, Inc. All rights reserved.`
    );

    const links = object('links', [
      { id: 1, href: '/about', text: 'About' },
      { id: 2, href: '/blog', text: 'Blog' },
      { id: 3, href: '/jobs', text: 'Jobs' },
      { id: 4, href: '/press', text: 'Press' },
      { id: 5, href: '/accessibility', text: 'Accessibility' },
      { id: 6, href: '/partners', text: 'Partners' }
    ]);
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'facebook' },
      { id: 2, href: '/', icon: 'instagram' },
      { id: 3, href: '/', icon: 'twitter' },
      { id: 4, href: '/', icon: 'github' },
      { id: 5, href: '/', icon: 'linkedin' }
    ]);
    return (
      <Footer4
        copyrightText={copyrightText}
        links={links}
        socialLinks={socialLinks}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Footers', module).add(
  'footer5',
  () => {
    const copyrightText = text(
      'copyrightText',
      `© 2020 UI-Kit, Inc. All rights reserved.`
    );
    const socialLinks = object('socialLinks', [
      { id: 1, href: '/', icon: 'facebook' },
      { id: 2, href: '/', icon: 'instagram' },
      { id: 3, href: '/', icon: 'twitter' },
      { id: 4, href: '/', icon: 'github' },
      { id: 5, href: '/', icon: 'linkedin' }
    ]);
    return <Footer5 copyrightText={copyrightText} socialLinks={socialLinks} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Banners', module).add(
  'banner1',
  () => {
    const timeout = text('timeout', '900');
    const icon = text('icon', 'download');
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      variation: 'white'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return (
      <Banner1
        fixed={fixed}
        timeout={parseInt(timeout)}
        icon={icon}
        link={link}
        text={textarea}
        in={true}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Banners', module).add(
  'banner2',
  () => {
    const timeout = text('timeout', '900');
    const icon = text('icon', 'download');
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      variation: 'white'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return (
      <Banner2
        fixed={fixed}
        timeout={parseInt(timeout)}
        icon={icon}
        link={link}
        text={textarea}
        in={true}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Banners', module).add(
  'banner3',
  () => {
    const timeout = text('timeout', '900');
    const icon = text('icon', 'download');
    const link = object('link', {
      href: '/',
      text: 'Learn more',
      variation: 'white',
      icon: 'arrow-right'
    });
    const fixed = select('fixed', ['top', 'bottom'], 'bottom');
    const textarea = text(
      'text',
      'Big news! We’ re excited to announce a brand new product.'
    );
    return (
      <Banner3
        fixed={fixed}
        timeout={parseInt(timeout)}
        icon={icon}
        link={link}
        text={textarea}
        in={true}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Newsletters', module).add(
  'newsletter1',
  () => {
    const majorText = text('majorText', 'Receive news and any answer?');
    const minorText = text('minorText', 'Sign up for our newsletter.');
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      variation: 'fill'
    });
    return (
      <Newsletter1
        majorText={majorText}
        minorText={minorText}
        input={input}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Newsletters', module).add(
  'newsletter2',
  () => {
    const majorText = text('majorText', 'Sign up for our newsletter');
    const description = text(
      'description',
      'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of satisfaction.'
    );
    const policyText = text(
      'policyText',
      'We care about the protection of your data. Read our Privacy Policy.'
    );
    const input = object('input', {
      placeholder: 'Enter your email'
    });
    const button = object('button', {
      text: 'Notify me',
      variation: 'fill'
    });

    return (
      <Newsletter2
        majorText={majorText}
        description={description}
        policyText={policyText}
        input={input}
        button={button}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Testimonials', module).add(
  'testimonial1',
  () => {
    const brand = object('brand', {
      logo: '',
      text: 'Bloomstation'
    });
    const quote = text(
      'quote',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    );
    const author = text('author', 'Alexandra Suda');
    const authorImage = text('authorImage', 'https://i.imgur.com/F80hD1h.jpg');
    const designation = text('designation', 'CEO');
    const company = text('company', 'Bloomstation');

    return (
      <Testimonial1
        brand={brand}
        quote={quote}
        author={author}
        authorImage={authorImage}
        designation={designation}
        company={company}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);

storiesOf('marketing/Testimonials', module).add(
  'testimonial2',
  () => {
    const quote =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.';

    const testimonials = object('testimonials', [
      {
        id: 1,
        brand: { logo: '', text: 'Bloomstation' },
        quote: quote,
        author: 'Alexandra Suda',
        authorImage: 'https://i.imgur.com/F80hD1h.jpg',
        designation: 'CEO',
        company: 'Bloomstation'
      },
      {
        id: 2,
        brand: { logo: '', text: 'BlocksBoot' },
        quote: quote,
        author: 'Aleksandr Solzhenitsyn',
        authorImage: 'https://i.imgur.com/ILmHmHq.jpg',
        designation: 'CEO',
        company: 'BlocksBoot'
      }
    ]);

    return <Testimonial2 testimonials={testimonials} />;
  },
  {
    knobs: {
      escapeHTML: false
    }
  }
);
