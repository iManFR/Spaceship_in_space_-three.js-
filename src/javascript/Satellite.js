/**
 * Imports
 */
// Import Three.js
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'


/**
 * Class
 */
class Satellite{
    constructor()
    {
        this.container = new THREE.Object3D()

        this.mtlLoader = new MTLLoader
        this.objLoader = new OBJLoader

        // Object
        this.setSatellite()
    }

    setSatellite(){
        this.mtlLoader.load('models/satellite/Satellite.mtl', (materials) => {
            materials.preload()
            this.objLoader.setMaterials(materials)
            this.objLoader.load('models/satellite/Satellite.obj', (object) => {
                this.container.add(object)
            })
        })
    }
}


/**
 * Exports
 */
export default Satellite