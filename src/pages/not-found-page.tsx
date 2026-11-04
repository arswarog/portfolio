import { Link } from 'react-router-dom';

import { assetUrl } from '@/lib/urls';

export function NotFoundPage() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="border-x border-border">
                        <div className="flex flex-col max-w-3xl mx-auto gap-4 px-4 sm:px-7 py-9 md:py-16">
                            <h1>Страница не найдена</h1>
                            <p>Такого кейса нет или он переехал.</p>
                            <Link
                                to="/"
                                className="group flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-300"
                            >
                                <img
                                    src={assetUrl('/images/icon/tile-arrow-icon.svg')}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="rotate-180 group-hover:-translate-x-1 transition-all duration-300 ease-in"
                                />
                                На главную
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
