import { FileDownload, Home, Restore, Schedule, Slideshow, Subscriptions, ThumbUpOutlined, VideoLibrary, VideoSettings } from '@mui/icons-material'

import meImg from '../assets/me.jpg'
import meImg2 from '../assets/me2.jpg'
import img1 from '../assets/1.avif'
import img2 from '../assets/2.jpg'
import abdo from '../assets/img1.jpg'


const ListItemsOne = [
  {
    icon: <Home />,
    title: "الصفحه الرئيسية",
    active:true
  },
  {
    icon: <VideoSettings />,
    title: "Shorts",
  },
  {
    icon: <Subscriptions />,
    title: "الأشتراكات",
  },
]
const ListItemsTwo = [
  {
    icon: <VideoLibrary />,
    title: "المكتبة"
  },
  {
    icon: <Restore />,
    title: "السجل"
  },
  {
    icon: <Slideshow />,
    title: "فيديوهاتك"
  },
  {
    icon: <Schedule />,
    title: "المشاهدة لاحقا"
  },
  {
    icon: <FileDownload />,
    title: "عمليات التنزيل"
  },
  {
    icon: <ThumbUpOutlined />,
    title: "فيديوهات أعجبتني"
  },
]
const ListSubscribe = [
  {
    src: meImg,
    name: "Omar Mohamed Ali"
  },
  {
    src: abdo,
    name: "عمر محمد علي"
  },
  {
    src: meImg2,
    name: "عمر محمد علي"
  },
  {
    src: img1,
    name: "اكاديمية العلم"
  },
  {
    src: img2,
    name: "تعلم اونلاين"
  },
]



export {
  ListItemsOne,
  ListItemsTwo,
  ListSubscribe,
}