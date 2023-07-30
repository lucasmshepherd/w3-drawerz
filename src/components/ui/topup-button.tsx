import cn from 'classnames';
import { Plus } from '@/components/icons/plus';
import { EthereumDark } from '@/components/icons/ethereum-dark';
import Link from 'next/link';

export default function TopupButton({
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Link
      href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x562d8e607bed7fc183ca84c0362c853680b99638"
      target="_blank"
      className={cn(
        'main-button w-full whitespace-nowrap px-12 py-3 text-center text-sm',
        className
      )}
    >
      <span className="flex-grow text-center text-xs lg:text-sm">
        Buy Tokens
      </span>
    </Link>
  );
}
