import Link from "next/link";

interface FooterProps {
  name: string;
  company_link: string;
}

const Footer = ({ name, company_link }: FooterProps) => {
  return (
    <footer className={" pt-4 text-gray-500 text-sm text-center"}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href={company_link}
          className={"hover:underline hover:text-blue-500"}
        >
          {name}
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
