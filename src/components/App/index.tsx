import { Layout, Button, Row, Col } from "antd";
import { EmptyNote } from "components/EmptyNote";
import { FooterInner } from "components/FooterInner";
import { HeaderInner } from "components/HeaderInner";
import { NoteDescription } from "components/NoteDescription";
import { NoteList } from "components/NoteList";
import { useNotesApi } from "containers/notes";

import styles from "./index.module.scss";

const { Header, Content, Footer } = Layout;

export const App = () => {
  const { currentNote } = useNotesApi();

  return (
    <div className="App">
      <Layout className={styles.layuout}>
        <Header>
          <HeaderInner />
        </Header>
        <Content className={styles.content}>
          <Row gutter={16} className={styles.content_inner}>
            <Col span={12} className={styles.note_list}>
              <NoteList />
            </Col>
            <Col span={12} className={styles.description}>
              {currentNote ? <NoteDescription /> : <EmptyNote />}
            </Col>
          </Row>
        </Content>
        <Footer>
          <FooterInner />
        </Footer>
      </Layout>
    </div>
  );
};
