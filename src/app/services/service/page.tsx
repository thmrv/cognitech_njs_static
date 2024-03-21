import Header from '../../components/sections/header'
import Masthead from '../../components/sections/masthead'
import Footer from '../../components/sections/footer'
import { useTranslation } from 'next-export-i18n';
 
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className='page flex p-0 w-screen h-max flex-col'>
        <Header/>
        <Masthead suptitle={t('masthead.suptitle')} title={t('masthead.title')} buttonText={t('masthead.button_text')}/>
        <Footer/>
    </div>
  )
}