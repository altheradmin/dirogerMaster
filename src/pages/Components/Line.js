import Box from './Box';
import styled from 'styled-components';

function Line({objj}) {

  return (
    <Container>
    <div className="line"><a> </a>
   {objj.map((movie, index) => {
            return <Box time1={objj[index].time1.match(/\d+/g)[0]} time2={objj[index].time2.match(/\d+/g)[0]}></Box>;
          })}
    </div>
    </Container>
  );
}
const Container = styled.div`
a{ margin-right: 10px;
line-height: 50px;
}
.line{
    padding-left: 30px;
    display: flex;
    flex-flow: row nowrap;

}
`

export default Line;
