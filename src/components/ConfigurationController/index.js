import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="showContent"
                  onChange={onChangeShowContent}
                  checked={showContent}
                />
                <label className="label-text" htmlFor="showContent">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="RightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label className="label-text" htmlFor="RightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
