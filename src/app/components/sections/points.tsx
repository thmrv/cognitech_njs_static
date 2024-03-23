import { useTranslation } from "next-export-i18n";
import Button from "../button";
import Card from "../card";
import Stat from "../stat";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Points() {
    const { t } = useTranslation();
    return (<Suspense fallback={<Loading/>}>
        <div className="points w-full bg-white m-auto max-w-screen-2xl pt-16 pb-16 grid grid-cols-3 gap-16" suppressHydrationWarning>
            <Card title={t('content.points.A.title')} text={t('content.points.A.paragraph')} className='base-point-card' icon='/svg/icon_data.svg' />
            <Card title={t('content.points.B.title')} text={t('content.points.B.paragraph')} className='base-point-card' icon='/svg/icon_analytics.svg' />
            <Card title={t('content.points.C.title')} text={t('content.points.C.paragraph')} className='base-point-card' icon='/svg/icon_ocr.svg' />
            <Card title={t('content.points.D.title')} text={t('content.points.D.paragraph')} className='base-point-card' icon='/svg/icon_ai.svg' />
            <Card title={t('content.points.E.title')} text={t('content.points.E.paragraph')} className='base-point-card' icon='/svg/icon_visual.svg' />
            <Stat caption={t('content.extra.caption')} unit={t('content.extra.unit')} number={t('content.extra.num')} />
        </div>
    </Suspense>
    )
}
