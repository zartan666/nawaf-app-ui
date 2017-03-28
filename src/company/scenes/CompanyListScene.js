/**
 @flow
 */
import React, {Component, PropTypes} from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import colors from "../../common/colors";
import Separator from "../../components/Separator";
import SearchBar from "../components/SearchBar";

export default class CompanyListScene extends Component {
  static propTypes = {
    companies:PropTypes.array.isRequired
  };

  renderItem = ({item,index}) => {

    return (
      <View style={styles.companyInfoContainer}>
        <Image source={{uri: item.logo}} style={styles.companyLogo} />

        <Text style={styles.companyTitle}>
          {item.name}
        </Text>

        <Text style={styles.openText}>Open</Text>

      </View>

    );

  };

  render() {
    let {companies} = this.props;
    return (
      <FlatList
        data={companies}
        renderItem={this.renderItem}
        ItemSeparatorComponent={()=><Separator />}
        ListHeaderComponent={()=><SearchBar />}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {},
  companyImage: {
    flex: 1,
    width: null,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyLogo: {
    width: 75,
    height: 75,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  companyInfoContainer:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    backgroundColor:'white',
    paddingBottom:10
  },
  companyTitle: {
    flex:1,
    color: colors.smokeGrayDark,
    backgroundColor: 'transparent',
    paddingHorizontal:10,
    fontSize:17,
    textAlign:'left'
  },
  openText:{
    color:colors.green,
    fontWeight:'500',
    fontSize:16
  },
});
