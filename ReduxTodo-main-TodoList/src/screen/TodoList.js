import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addTodo,
  selectedTodoList,
  deleteTodo,
  edit,
} from '../features/AddTodo/AddTodoSlice';

import {dimension, colors, images} from '../utils';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const {vw, vh} = dimension;

let TodoList = () => {
  const count = useSelector(state => state.addTodoReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [editId, setEditId] = useState(-1);
  let check = id => {
    if (count.selectedTodo.indexOf(id) != -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <SafeAreaView style={style.container}>
    <View style={style.header}>
    <Text style={style.headingText}>Todo List</Text>
    </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.flatList}
        data={count.data}
        renderItem={({item}) => {
          return (
            <View style={style.listView}>
              <Text style={style.listText}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => {
                  setData(item.name);
                  setEditId(item.id);
                }}>
                <Text style={style.editText}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
                <Text style={style.deleteText}>DELETE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.checkBox}
                onPress={() => {
                  dispatch(selectedTodoList(item.id));
                }}>
                <Image
                  style={{
                    tintColor: check(item.id) ? colors.darkBlue : colors.white,
                  }}
                  source={images.check}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={style.textInputAndAddImageView}>
        <TextInput
          style={style.textInput}
          onChangeText={text => setData(text)}
          placeholder='Add task'
          selectionColor={colors.darkBlue}
          placeholderTextColor={Colors.black}
          value={data}
        />

        <TouchableOpacity
          onPress={() => {
            if (editId == -1) {
              data != null && data != ''
                ? (dispatch(addTodo(data)), setData(''))
                : '';
            } else {
              dispatch(
                edit({name: data, id: editId}),
                setData(''),
                setEditId(-1),
              );
            }
          }}>
          <View style={style.addImageView}>
            <Image style={style.addImage} source={images.addImage} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInputAndAddImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: vw(360),
    height: vh(90),
    borderTopWidth: vw(1),
    borderColor: colors.darkBlue,
  },
  textInput: {
    width: vw(250),
    height: vh(54),
    borderWidth: vw(1),
    borderRadius: vw(30),
    borderColor: colors.darkBlue,
    paddingLeft: vw(10),
    marginTop: vh(10),
    paddingLeft:vw(16),
    fontSize:vw(14)
  },
  addImage: {
    width: vw(15),
    height: vh(15),
    alignSelf: 'center',
    tintColor:colors.darkBlue
  },
  addImageView: {
    width: vw(50),
    height: vh(50),
    borderRadius: vw(25),
    borderWidth: vw(1),
    justifyContent: 'center',
    borderColor: colors.darkBlue,
    marginLeft: vw(8),
    marginTop: vh(10),
  },
  listView: {
    width: vw(320),
    borderWidth: vw(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.darkBlue,
    paddingHorizontal: vw(16),
    borderRadius: vw(30),
    paddingVertical: vh(20),
    marginTop: vh(15),
    marginHorizontal: vw(16),
  },
  listText: {
    width: vw(130),
    fontSize: vw(14),
    color: colors.black,
  },
  checkBox: {
    width: vw(20),
    height: vh(20),
    borderWidth: vw(1),
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    height: vh(538),
    width: vw(360),
    borderTopWidth: vw(1),
    borderColor: colors.darkBlue, 
  },
  selectiveDelete: {
    paddingTop: vh(40),
    marginLeft: vw(16),
    fontSize: vw(16),
    color: colors.black,
    fontWeight: '800',
  },
  deleteText:{
    color:colors.black
  },
   editText:{
    color:colors.black
  },
  header:{
    height:vh(50),
    justifyContent:'center',
    paddingLeft:vw(16)
  },
  headingText:{
    fontSize:vw(20),
    color:colors.black,
    fontWeight:'bold'
  }
});

export default TodoList;
