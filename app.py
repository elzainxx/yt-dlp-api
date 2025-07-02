from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/yt-dlp', methods=['POST'])
def download():
    try:
        # Ensure the request has JSON body
        data = request.get_json(force=True)
        video_url = data.get("videoUrl")

        if not video_url:
            return jsonify({"error": "Missing videoUrl"}), 400

        # Create downloads folder if not exists
        output_dir = "downloads"
        os.makedirs(output_dir, exist_ok=True)

        # Define output format
        output_path = f"{output_dir}/%(title)s.%(ext)s"

        # Run yt-dlp to extract MP3 audio
        result = subprocess.run([
            "yt-dlp", "-x", "--audio-format", "mp3", "-o", output_path, video_url
        ], capture_output=True, text=True)

        # Return all debug info regardless of result
        return jsonify({
            "returncode": result.returncode,
            "stdout": result.stdout.strip(),
            "stderr": result.stderr.strip()
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
