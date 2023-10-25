import { AccessTime, DoDisturb, Download, FlagOutlined, PlaylistAdd, PlaylistPlay, RemoveCircleOutline, Reply } from "@mui/icons-material";

export const videoOption = [
  {
    title:"الأضافة إلي قائمة المحتوي التالي",
    icon:<PlaylistPlay/>
  },
  {
    title:`حفظ في قائمة"المشاهدة لاحقا"`,
    icon:<AccessTime/>
  },
  {
    title:"حفظ في قائمة تشغيل",
    icon:<PlaylistAdd/>
  },
  {
    title:"تنزيل",
    icon:<Download/>
  },
  {
    title:"مشاركة",
    icon:<Reply/>
  },
  {
    divider:true
  },
  {
    title:"لا يهمني",
    icon:<DoDisturb/>
  },
  {
    title:"عدم اقتراح القناة",
    icon:<RemoveCircleOutline/>
  },
  {
    title:"الإبلاغ",
    icon:<FlagOutlined/>
  },
]