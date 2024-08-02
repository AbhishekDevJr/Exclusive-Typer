import Image from "next/image";
import LogoSvg from "../../../public/logo.svg";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-[30px]">
            <div className="flex items-center justify-center gap-[25px]">
                <Link href={'/'} className="flex items-center justify-between gap-[10px]">
                    <Image
                        src={LogoSvg}
                        alt="Logo"
                        className="max-w-[50px] max-h-[40px]"
                    />
                    <h1 className="text-[36px] font-[600] text-[#D4D4D4] tracking-[1px] relative">
                        <p className="text-[12px] m-[0] absolute top-[-6px] left-[5px] text-[#494C43]">Gorilla See</p>
                        GorillaType
                    </h1>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-keyboard icon-style hover:icon-style-hover"></i>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-crown icon-style hover:icon-style-hover"></i>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-info icon-style hover:icon-style-hover"></i>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-cog icon-style hover:icon-style-hover"></i>
                </Link>
            </div>

            <div className="flex items-center justify-between gap-[25px]">
                <Link href="/" className="flex items-center justify-center gap-[10px] group">
                    <i aria-hidden className="fas fa-fw fa-user icon-style group-hover:text-[#D4D4D4] group-hover:opacity-[1]"></i>
                    <p className="text-[#5f5f5f] group-hover:text-[#D4D4D4] group-hover:opacity-[1]">{`Namikaze_007`}</p>
                    <span className="py-[1px] px-[6px] rounded-md text-[12px] bg-[#5f5f5f] opacity-[0.6] color-[transparent] group-hover:bg-[#D4D4D4] group-hover:opacity-[1]">83</span>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-bell icon-style hover:icon-style-hover"></i>
                </Link>

                <Link href="/">
                    <i aria-hidden className="fas fa-fw fa-sign-out-alt icon-style hover:icon-style-hover"></i>
                </Link>
            </div>
        </header>
    );
}