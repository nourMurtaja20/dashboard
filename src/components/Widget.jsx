import "./Widget.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import img1 from "../resources/images/Vector 620.png"
const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "TotalProjects":
            data = {
                title: "Total Projects",
                counter: 32,
                link: "0.5% less than last week",
                icon: (
                    <TrendingDownIcon
                        className="icon"
                        style={{
                            marginRight:"10px"
                        }}
                    />
                ),
            };
            break;
        case "Freelancers":
            data = {
                title: "Freelancers",
                counter: 20,
                link: "2.6% more than last week",
                icon: (
                    <TrendingUpIcon
                        className="icon"
                        style={{
                            marginRight: "10px"
                        }}
                    />
                ),
            };
            break;
        case "Donors":
            data = {
                title: "Donors",
                counter: 20,
                link: "3% more than last week",
                icon: (
                    <TrendingUpIcon
                        className="icon"
                        style={{
                            marginRight: "10px"
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return ( 
        <div className="widget">
            <div className="top">
                <span className="title">{data.title}</span>
                <div className="percentage">
                    Details
                    <ArrowForwardIcon style={{ fontSize: "24px", paddingLeft: "5px" }} />
                </div>
            </div>
            <div className="mid" style={{justifyContent:"space-around"}}>
                <span className="counter">
                    +{data.counter}
                </span>
                <img src={img1} alt=""/>
            </div>
            <div className="bottom">
                <span className="link">{data.icon} {data.link}</span>
            </div>
        </div>
    
    );
};

export default Widget;
