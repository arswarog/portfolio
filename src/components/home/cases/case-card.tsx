import { Link } from 'react-router-dom';

import { assetUrl } from '@/lib/urls';

interface CaseCardProps {
    readonly to: string;
    readonly image: string;
    readonly title: string;
    readonly description: string;
}

export function CaseCard({ to, image, title, description }: CaseCardProps) {
    return (
        <Link
            to={to}
            className="group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 bg-background md:last:odd:col-span-2"
        >
            <div className="overflow-hidden">
                <img
                    src={assetUrl(image)}
                    alt={title}
                    width={490}
                    height={300}
                    className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </div>
            <div className="flex flex-col gap-1 sm:gap-2 px-2">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Link>
    );
}
