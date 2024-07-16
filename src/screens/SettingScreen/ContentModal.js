import React from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';
import {Content, Container} from 'native-base';
import Header from '../../components/Header1';
import colors from '../../common/colors';

const ContentModal = props => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text={'Về chúng tôi'}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => props.navigation.goBack()}
      />

      <Content
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20, paddingBottom: 0}}>
        <Text style={css.title}>Giới thiệu</Text>
        <Text style={css.content}>
          Chúng tôi luôn hiểu rằng chăm sóc sức khỏe toàn diện phải là một sự
          kết hợp giữa việc chẩn đoán chính xác, điều trị an toàn và chăm sóc
          chu đáo, ân cần, kỹ lưỡng. Do đó các nhân viên y tế tại Golden
          Healthcare không chỉ có kinh nghiệm chuyên sâu mà còn được đào tạo
          liên tục để phục vụ bệnh nhân cùng người thân bệnh nhân bằng cả trái
          tim, đúng với phương châm “All you need is LOVE”. Đến với Phòng Khám
          chúng tôi, quý khách luôn nhận được nụ cười, sự ân cần hướng dẫn tận
          tình của đội ngũ nhân viên, tập thể Y Bác Sỹ. Cùng với quy trình khám
          bệnh hợp lý và đội Bác sĩ giàu kinh nghiệm, tu nghiệp nước ngoài,
          Phòng khám Đa khoa Quốc tế Golden là một trong những trung tâm khám
          bệnh chất lượng cao và đáng tin cậy ở TP Hồ Chí Minh. Với sự kết hợp
          bởi các nhân tố con người, thiết bị y tế, vị trí địa lý thuận lợi,
          chúng tôi đang trên con đường hoàn thiện dịch vụ trong việc chăm sóc
          sức khỏe. Nụ cười, niềm hạnh phúc của bạn và gia đình bạn là phần
          thưởng cao quý và vô giá với chúng tôi.
        </Text>
        <Text style={css.title}>Tầm nhìn</Text>
        <Text style={css.content}>
          Golden Healthcare là phòng khám chuẩn quốc tế cung cấp dịch vụ chăm
          sóc sức khỏe toàn diện và điều trị y tế tận tâm, chu đáo, an toàn cho
          bệnh nhân và gia đình bệnh nhân.
        </Text>
        <Text style={css.title}>Sứ mệnh</Text>
        <Text style={css.content}>
          Đối với bệnh nhân và gia đình bệnh nhân: Nhiệm vụ hàng đầu của Golden
          Healthcare là trang bị cơ sở vật chất chuẩn quốc tế, thiết bị y tế
          chẩn đoán chính xác cộng nền tảng trân trọng, trung thực chuẩn mực y
          đức của đội ngũ lãnh đạo cũng như nhân viên tại Golden Healthcare.
          Bệnh nhân hay gia đình bệnh nhân sẽ được nhận một dịch vụ chăm sóc sức
          khỏe toàn diện, một dịch vụ y tế tận tâm, chuẩn đoán chính xác và điều
          trị an toàn với nụ cười chân thành, trân trọng tại Golden Healthcare
          (GHC)
        </Text>
        <Text style={css.content}>
          Đối với nhân viên: Mỗi nhân viên là một thành phần không thể tách rời,
          cực kỳ quan trọng trong công cuộc chinh phục tầm nhìn của GHC. GHC cam
          kết tuyển chọn, đào tạo và huấn luyện đầy đủ và liên tục cho đội ngũ
          nhân viên theo tiêu chuẩn quốc tế để phục vụ cho bệnh nhân và gia đình
          bệnh nhân như thể chăm sóc chính người thân của mình. Nhân viên tại
          GHC sẽ được làm việc trong môi trường quốc tế chuyên nghiệp, đầy tình
          yêu thương, thân thiện, tôn trọng lẫn nhau và được tưởng thưởng xứng
          đáng.
        </Text>
        <Text style={css.content}>
          Đối với Quốc gia: “Vì một Việt Nam khỏe mạnh” GHC cam kết thông qua
          các hoạt động xã hội giúp nâng cao kiến thức y tế, ý thức y tế, sức
          khỏe cho cộng đồng tương đương với các chuẩn mực quốc tế
        </Text>
        <Text style={css.title}>Tầm nhìn</Text>
        <Text style={css.content}>
          <Text style={css.hightlight}>
            “All you need is LOVE” – “Dành tất cả tình yêu cho Bệnh nhân”
            {'\n\n'}
          </Text>
          Phương châm của Golden Healthcare là “All you need is LOVE” – “Dành
          tất cả tình yêu cho Bệnh nhân”. Mỗi Bác sĩ, nhân viên y tế tại GHC đều
          đặt sức khỏe và sự an toàn của bệnh nhân lên hàng đầu trong mọi hoạt
          động. Tất cả qui trình và hoạt động của chúng tôi đều lấy nhu cầu và
          sự an toàn của người bệnh làm trọng điểm, đây là thước đo đánh giá y
          đức của Bác sỹ, chất lượng dịch vụ, cung cấp phục vụ, sự chu đáo, kỹ
          lưỡng, nhiệt tình với thái độ sẻ chia, thông cảm.
        </Text>
      </Content>
    </Container>
  );
};

const css = StyleSheet.create({
  title: {
    // fontFamily: Styles.FontFamily.robotoBold,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 15,
  },
  content: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 15,
  },
  hightlight: {
    fontStyle: 'italic',
    fontWeight: '700',
    color: 'black',
  },
});

export default ContentModal;
