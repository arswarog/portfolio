import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '@/components/scroll-to-top';
import { BillingCasePage } from '@/pages/cases/billing';
import { HomePage } from '@/pages/home-page';
import { NotFoundPage } from '@/pages/not-found-page';

export function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/cases/billing"
                    element={<BillingCasePage />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}
