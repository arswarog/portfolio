import { ServiceBadge } from '@/components/home/about-me/service-badge';
import { assetUrl } from '@/lib/urls';

import { CaseLayout } from './case-layout';

export function Case1Page() {
    return (
        <CaseLayout>
            <div className="flex flex-col gap-4">
                <h1>Кейс 1</h1>
                <p className="text-lg">
                    Вводный текст кейса: контекст продукта, команда, задача. Заглушка.
                </p>
            </div>
            <img
                src={assetUrl('/images/cases/case-1.svg')}
                alt="Кейс 1"
                width={980}
                height={600}
                className="w-full rounded-lg border border-border"
            />
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                    Что сделано
                </p>
                <ul className="flex flex-col gap-2.5 list-disc pl-5">
                    <li className="text-base text-muted-foreground">Пункт результата — заглушка</li>
                    <li className="text-base text-muted-foreground">Пункт результата — заглушка</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Стек</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <ServiceBadge>React</ServiceBadge>
                    <ServiceBadge>TypeScript</ServiceBadge>
                </div>
            </div>
        </CaseLayout>
    );
}
