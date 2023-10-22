import { FileDownload, Home, Restore, Schedule, Slideshow, Subscriptions, ThumbUpOutlined, VideoLibrary, VideoSettings } from '@mui/icons-material'

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
    src: "file.jpg",
    name: "omarmohamedaliahmed"
  }, 
  {
    src: "a.jpg",
    name: "عبدالرحمن محمد علي"
  },
  {
    src: "b.jpg",
    name: "عمر محمد علي"
  },
  {
    src: null,
    name: "اكاديمية العلم"
  },
  {
    src: null,
    name: "تعلم اونلاين"
  },
]



export {
  ListItemsOne,
  ListItemsTwo,
  ListSubscribe,
}