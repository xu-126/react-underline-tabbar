import PropTypes from 'prop-types'
import { noop } from '../utils'

export const propTypes = {
  tabs: PropTypes.array,
  pos: PropTypes.object,
  width: PropTypes.number,
  goToPage: noop,
  activeTab: PropTypes.number,
  renderTab: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
  scrollPosition: PropTypes.string,
  style: PropTypes.object,
  scrollViewStyle: PropTypes.object,
  underlineStyle: PropTypes.object,
  tabStyle: PropTypes.object,
  tabActiveStyle: PropTypes.object,
  tabTextStyle: PropTypes.object,
  tabTextActiveStyle: PropTypes.object,
  hasUnderline: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  hasAnimation: PropTypes.bool,
  duration: PropTypes.number,
  vertical: PropTypes.bool,
}

export const defaultProps = {
  tabs: [],
  pos: null,
  width: 0,
  goToPage: noop,
  activeTab: 0,
  renderTab: null,
  scrollPosition: 'center',
  style: {},
  scrollViewStyle: {},
  underlineStyle: {},
  tabStyle: {},
  tabActiveStyle: {},
  tabTextStyle: {},
  tabTextActiveStyle: {},
  hasUnderline: true,
  scrollEnabled: true,
  hasAnimation: true,
  duration: 400,
  vertical: true,
}
