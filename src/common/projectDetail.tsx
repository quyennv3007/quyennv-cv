import { FaCss3Alt, FaJs, FaLess, FaReact } from "react-icons/fa6";
import { SiAntdesign, SiMui, SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import wh1 from "../assets/image/imageProject/wh-1.png"
import wh2 from "../assets/image/imageProject/wh-2.png"
import sl1 from "../assets/image/imageProject/sl-1.png"
import sl2 from "../assets/image/imageProject/sl-2.png"
import ci1 from "../assets/image/imageProject/ci-1.png"
import ci2 from "../assets/image/imageProject/ci-2.png"
import as1 from "../assets/image/imageProject/as-1.png"
import as2 from "../assets/image/imageProject/as-2.png"
import ja1 from "../assets/image/imageProject/ja-1.png"
import appsmith from '../assets/image/favicon.png'
import jetadmin from '../assets/image/jetAdmin.png'

export const projectsData = {
  '1': {
    title: { en: 'Warehouse', vi: 'Warehouse' },
    description: {
      en: 'A warehouse management application for VietMap warranty system, supporting inventory tracking, product returns, and warranty replacements. The app enables the creation of return/warranty import slips and allows checking product quantities across the entire VietMap warehouse network.',
      vi: 'Ứng dụng quản lý kho dành cho hệ thống bảo hành VietMap, hỗ trợ theo dõi tình trạng sản phẩm tồn kho, sản phẩm đổi trả và bảo hành. Ứng dụng cho phép tạo phiếu nhập hàng đổi trả bảo hành, đồng thời kiểm tra số lượng sản phẩm trên toàn bộ hệ thống kho của VietMap.'
    },
    role: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend'
    },
    technologies: ["React", "Ant design", "Redux mock", "Less"],
    icon: [<FaReact className="text-cyan-400 text-2xl" />,
    <SiAntdesign className="text-red-600 text-2xl" />,
    <SiRedux className="text-cyan-600 text-2xl" />,
    <FaLess className="text-cyan-600 text-2xl" />,
    ],
    features: {
      en: [
        'Manage all products in VietMap warehouses, including defective items, usable stock, and items requiring processing...',
        'Track and manage product transfers between warehouses.',
        'Clearly manage and generate import, warranty, and return forms.',
        'Support Single Sign-On (SSO) using VietMap internal Gmail accounts.'
      ],
      vi: [
        'Quản lý toàn bộ sản phẩm trong kho VietMap, bao gồm sản phẩm lỗi, sản phẩm còn sử dụng được và các sản phẩm cần xử lý...',
        'Theo dõi và quản lý việc luân chuyển sản phẩm giữa các kho.',
        'Tạo và quản lý phiếu nhập hàng, phiếu bảo hành, đổi trả một cách minh bạch và rõ ràng.',
        'Hỗ trợ đăng nhập một lần (SSO) bằng tài khoản Gmail nội bộ của VietMap.'
      ]
    },
    timeline: '5/2024 - 9/2024',
    images: [
      wh1,
      wh2
    ],
    github: '#',
    liveDemo: '#',
  },
  // ---------------------------------------------------------------------------------------------------------------------------
  '2': {
    title: { en: 'SalePlan', vi: 'SalePlan' },
    description: {
      en: 'The application assists VietMap sales team in creating sales plans for dealers based on product categories. Plans are structured quarterly and annually, enabling the assignment of clear sales targets for each salesperson. Managers can easily monitor progress and assess performance toward sales goals with transparency and efficiency.',
      vi: 'Ứng dụng hỗ trợ đội ngũ kinh doanh VietMap xây dựng kế hoạch bán hàng cho các đại lý dựa trên danh mục sản phẩm. Kế hoạch được thiết lập theo từng quý và từng năm, từ đó giúp xác định chỉ tiêu (target) cụ thể cho từng nhân viên kinh doanh. Quản lý có thể dễ dàng theo dõi và đánh giá tiến độ thực hiện mục tiêu bán hàng một cách minh bạch và hiệu quả.'
    },
    role: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend'
    },
    technologies: ['React', 'NestJS', 'Ant Design', 'PostgreSQL'],
    icon: [<FaReact className="text-cyan-400 text-2xl" />,
    <SiAntdesign className="text-red-600 text-2xl" />,
    <SiRedux className="text-cyan-600 text-2xl" />,
    <FaLess className="text-cyan-600 text-2xl" />,
    ],
    features: {
      en: [
        'User authentication through the existing secure system.',
        'Sales planning by quarter and year, with clear targets for each salesperson.',
        'Plan approval workflow for managers and application settings management for administrators.',
        'Product pricing table management over time, allowing dynamic updates and tracking.',
        'Dealer reassignment between sales staff to optimize resource allocation.',
        'Planning for new dealer openings based on regional or business strategies.',
        'Tools for sales staff to collect and monitor dealer sales data for analysis and performance tracking.',
      ],
      vi: [
        'Lập kế hoạch bán hàng theo từng quý và từng năm, gắn với mục tiêu cụ thể cho từng nhân viên kinh doanh.',
        'Chức năng phê duyệt kế hoạch dành cho cấp quản lý và thiết lập hệ thống dành cho quản trị viên (admin).',
        'Quản lý bảng giá sản phẩm theo thời gian, hỗ trợ theo dõi và cập nhật giá linh hoạt.',
        'Chuyển đổi đại lý giữa các nhân viên kinh doanh, phục vụ điều phối hiệu quả nguồn lực.',
        'Lập kế hoạch mở mới đại lý theo khu vực hoặc chiến lược kinh doanh.',
        'Công cụ thu thập dữ liệu bán hàng từ các đại lý, hỗ trợ phân tích và theo dõi hiệu suất kinh doanh.'
      ]
    },
    timeline: '2/2024 - 5/2024 | 9/2024 - 12/2024',
    images: [
      sl1,
      sl2
    ],
    github: '#',
    liveDemo: '#'
  },
  // ---------------------------------------------------------------------------------------------------------------------------
  '3': {
    title: { en: 'Call Insight', vi: 'Call Insight' },
    description: {
      en: 'The application analyzes calls, helping the customer service department assess employee skills and performance.',
      vi: 'Ứng dụng phân tích cuộc gọi, hỗ trợ bộ phận chăm sóc khách hàng đánh giá kỹ năng và hiệu quả làm việc của nhân viên.'
    },
    role: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend'
    },
    technologies: ["NextJs", "Material", "Redux toolkit", "Tailwind"],
    icon: [<SiNextdotjs className="text-gray-800 text-2xl" />,
    <SiMui className="text-blue-600 text-2xl" />,
    <SiRedux className="text-cyan-600 text-2xl" />,
    <SiTailwindcss className="text-cyan-400 text-2xl" />,
    ],
    features: {
      en: [
        'Receive incoming call signals from the VietMap call center, ensuring timely customer connection.',
        'Display real-time data to assist call center agents in quickly entering information and providing effective consultation.',
        'Utilize AI to analyze call content and quality.',
        'Generate detailed reports on analyzed calls and evaluate the performance of call center agents.'
      ],
      vi: [
        'Nhận tín hiệu cuộc gọi đến từ tổng đài VietMap, đảm bảo kết nối kịp thời với khách hàng.',
        'Hiển thị dữ liệu thời gian thực, hỗ trợ tổng đài viên nhập liệu nhanh chóng và tư vấn khách hàng hiệu quả.',
        'Ứng dụng trí tuệ nhân tạo (AI) để phân tích nội dung và chất lượng cuộc gọi.',
        'Cung cấp báo cáo chi tiết về các cuộc gọi đã được phân tích, đồng thời đánh giá hiệu suất làm việc của tổng đài viên.',
      ]
    },
    timeline: '3/2025',
    images: [
      ci1,
      ci2
    ],
    github: '#',
    liveDemo: '#'
  },
  // ---------------------------------------------------------------------------------------------------------------------------
  '4': {
    title: { en: 'E-commerce Platform', vi: 'Nền Tảng Thương Mại Điện Tử' },
    description: {
      en: 'A sales management application for authorized VietMap dealers, enabling them to place product orders directly through the platform. The app provides full order management capabilities, including order tracking, product inventory checks, and integrated payment methods. Administrators can oversee all sales activities, manage pricing policies, and ensure smooth operation of the distribution network.',
      vi: 'Ứng dụng quản trị bán hàng dành cho các đại lý trong hệ thống VietMap, cho phép đại lý đặt mua sản phẩm trực tiếp trên nền tảng. Ứng dụng hỗ trợ quản lý đơn hàng, theo dõi trạng thái xử lý, kiểm tra tồn kho sản phẩm, đồng thời tích hợp các phương thức thanh toán linh hoạt. Quản trị viên có thể theo dõi toàn bộ hoạt động mua bán, kiểm soát chính sách giá và hỗ trợ vận hành hiệu quả hệ thống phân phối.'
    },
    role: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend'
    },
    technologies: ["AppSmith", "Javascript", "Css"],
    icon: [<img src={appsmith} className="text-gray-800 text-2xl w-6" />,
    <FaJs className="text-yellow-500 text-2xl" />,
    <FaCss3Alt className="text-blue-500 text-2xl" />,
    ],
    features: {
      en: [
        'Display complete transaction history, orders, and outstanding balances for each dealer.',
        'Configure and manage product information, promotions, and sales policies.',
        'Manage inventory levels and product transfers across the warehouse system.',
        'Update and monitor shipping information and delivery status to dealers.'
      ],
      vi: [
        'Hiển thị đầy đủ các giao dịch, đơn hàng và công nợ của từng đại lý.',
        'Thiết lập và quản lý thông tin sản phẩm, chương trình khuyến mãi và chính sách bán hàng.',
        'Quản lý tồn kho, luân chuyển hàng hóa giữa các kho trong hệ thống.',
        'Cập nhật và theo dõi thông tin vận chuyển, trạng thái giao hàng đến đại lý.',
      ]
    },
    timeline: '3/2023- 10/2023',
    images: [
      as1,
      as2
    ],
    github: '#',
    liveDemo: '#'
  }
  ,
  // ---------------------------------------------------------------------------------------------------------------------------
  5: {
    title: { en: 'Internal App', vi: 'Hệ thống app nội bộ' },
    description: {
      en: 'An internal application system, including payment management, SIM management, and Logitech device management...',
      vi: 'Hệ thống ứng dụng nội bộ, bao gồm các ứng dụng thanh toán, quản lý SIM và quản lý thiết bị Logitech...'
    },
    role: {
      en: 'Frontend Developer',
      vi: 'Lập trình viên Frontend'
    },
    technologies: ["JetAdmin", "Javascript", "Css"],
    icon: [<img src={jetadmin} className="text-gray-800 text-2xl w-6" />,
      <FaJs className="text-yellow-500 text-2xl" />,
      <FaCss3Alt className="text-blue-500 text-2xl" />,
      ],
    features: {
      en: [
        'Track SIM status, activation info, and device assignment.',
        'Manage payment transactions from dealers and customers.',
        'Monitor order delivery and shipping status.',
        'Handle and process product repair requests.',
        'Support product warranty activation and tracking.',
      ],
      vi: [
        'Theo dõi trạng thái SIM, thông tin kích hoạt và gắn với thiết bị.',
        'Quản lý các giao dịch thanh toán của đại lý và khách hàng.',
        'Theo dõi đơn hàng, trạng thái vận chuyển và giao nhận.',
        'Ghi nhận và xử lý các yêu cầu sửa chữa sản phẩm.',
        'Hỗ trợ kích hoạt bảo hành và theo dõi thời gian hiệu lực.'
      ]
    },
    timeline: '11/2023- 2/2024',
    images: [
      ja1
    ],
    github: '#',
    liveDemo: '#'
  }
}