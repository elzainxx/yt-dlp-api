from flask import Flask, request, jsonify
import subprocess, os

app = Flask(__name__)

@app.route('/yt-dlp', methods=['POST'])
def download():
    data = request.get_json()
    video_url = data.get("videoUrl")
    if not video_url:
        return jsonify({"error": "Missing videoUrl"}), 400

    output_dir = "downloads"
    os.makedirs(output_dir, exist_ok=True)

    result = subprocess.run([
        "yt-dlp", "-x", "--audio-format", "mp3",
        "-o", f"{output_dir}/%(title)s.%(ext)s", video_url
    ], capture_output=True, text=True)

    if result.returncode != 0:
        return jsonify({"error": result.stderr}), 500

    return jsonify({"message": "Downloaded successfully"}), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
