"use client"

import dynamic from "next/dynamic";
import {
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@/../public/icons";
import Button from "@/components/Button";
import {  useTranslations } from "next-intl";

const LanguageSelect = dynamic(() => import("@/components/LanguageSelect"), {
  ssr: false,
});

const Header = () => {

  const t = useTranslations("Header");

  return (
      <div className="containers">
        <div className="flex items-center justify-between py-2.75">
          <div className="flex items-center gap-6.75">
            <a
                href={"tel:+99890758383833"}
                className="flex items-center gap-3 text-black"
            >
              <PhoneIcon />
              +998(90)758383833
            </a>
            <a
                href={"mailto:info@bmgsoft.com"}
                className="flex items-center gap-2.75 text-black"
            >
              <MailIcon />
              info@bmgsoft.com
            </a>
          </div>
          <div className="flex items-center gap-8.75">
            <div className="flex items-center gap-2">
              <LanguageSelect/>
            </div>
            <Button extraStyle="py-[3px]! px-[8px]! text-white gap-[6px]! text-[10px]">
              <UserIcon />
              {t("SignIn")}
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Header;