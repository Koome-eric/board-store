import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterComponent from './FooterComponent/footercomponent';

const Footer = () => {
  
  return (
    <footer>
    <FooterComponent /> {/* Include FooterComponent above the current footer */}
    <div className="flexCenter mb-16 bg-custom-pink pt-11">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="logo" width={150} height={150} priority />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((column, index) => (
              <FooterColumn key={index} title={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link === 'Contact Us' ? '/' : link === 'About Us' ? '/' : link === 'Privacy Policy' ? '/' : link === 'Blogs' ? '/' : '/'} passHref>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <Link
                    href="/"
                    key={linkIndex}
                    passHref
                  >
                    <p className="flex gap-4 md:flex-col lg:flex-row whitespace-nowrap medium-14 text-custom-red">
                      {link.label}: {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="/" passHref>
                        <Image src={link} alt="social logo" width={24} height={24} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Mara Raha Art Store, Inc. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer;
