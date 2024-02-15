import {
    ArticleConatiner,
    ArticleImg,
    ArticleTextConatiner,
    ArticleTitle,
    ArticleName,
    ArticleDescription,
    ArticleTime,
    Arrow,
} from './styledComponents';


const CardArticle = (props) => {
    const { details } = props;
    const {title,name,imgUrl,description,time} = details;
  
    return (
      <ArticleConatiner>
      <ArticleImg src={imgUrl} alt="not found"></ArticleImg>
      <ArticleTextConatiner>
       <ArticleTitle>{title}</ArticleTitle>
       
       <ArticleName>{name}</ArticleName>
       
       <ArticleDescription>{description}</ArticleDescription>
       <br />
       <ArticleTime>{time}</ArticleTime>
       
       <Arrow>&rarr;</Arrow>
      </ArticleTextConatiner>
      </ArticleConatiner>
    );
  };

export default CardArticle
