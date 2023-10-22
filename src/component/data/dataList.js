import { FileDownload, Home, Restore, Schedule, Slideshow, Subscriptions, ThumbUpOutlined, VideoLibrary, VideoSettings } from '@mui/icons-material'
import meImg from '../../assets/me.jpg'
import abdo from '../../assets/abdo.jpg'
import img1 from '../../assets/1.avif'
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
    src: meImg,
    name: "عمر محمد علي"
  },
  {
    src: abdo,
    name: "Abdelrahman Mohamed Ali"
  },
  {
    src: img1,
    name: "اكاديمية العلم"
  },
  {
    src: img1,
    name: "تعلم اونلاين"
  },
]



export {
  ListItemsOne,
  ListItemsTwo,
  ListSubscribe,
}