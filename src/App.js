// baseUI setup
// see: https://baseweb.design/getting-started/setup/
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';

import Header from './components/Header.js';
import Post from './components/Post.js';
import BlogPost from './components/BlogPost.js';

import EthBuildersLogo from './images/EthBuildersWhite.png';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Header brandName='EthBuilders.NYC' />
        <Centered>
          <div>
            <h1>EthBuilders.NYC</h1>
            <p>EthBuilder is a community for those interested 
            in discussing and participating in the research and
            development of Ethereum and related protocols.</p>
            <p>Everyone is welcomed!</p>
                        
            <h2>Upcoming and Recent Events</h2>
            <Post 
              date='30 Nov 2020' 
              title='Book Club - Debt: The First 5000 Years - Ch 1' 
              link="https://www.meetup.com/ethbuilders/events/wrpmcsybcqbcc/"
            />
            <Post 
              date='06 Dec 2020' 
              title='Book Club - Debt: The First 5000 Years - Ch 2' 
              link="https://www.meetup.com/ethbuilders/events/wrpmcsybcqbcc/"
            />
            <h2>Recent Blog Posts</h2>
            <BlogPost></BlogPost>
            <h2>Resources</h2>
            <img src={EthBuildersLogo} alt="group logo" />
          </div>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
