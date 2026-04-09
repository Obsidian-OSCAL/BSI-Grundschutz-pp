---
tags:
- Insider_Threat
- det35-prm1
- det35-prm2
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.5 Unbestreitbarkeit
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.5 - Unbestreitbarkeit
Tags: "[Insider Threat](tags_Insider Threat)"
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *** | Daten | KANN | Nachweise für den Zusammenhang {{bestimter Ereignisse}} mit {{einer bestimmten Person oder Rolle}} |  | dokumentieren | Detektions-Konzept | >Detektion für Daten KANN Nachweise für den Zusammenhang {{ insert: param, det.3.5-prm1 }} mit {{ insert: param, det.3.5-prm2 }} dokumentieren.

> [!info]- Guidance
>Für Handlungen, die eine besondere Bedeutung für die rechtliche Compliance oder die korrekte Verarbeitung von Daten in kritischen Geschäftsprozessen haben, kann es sinnvoll sein, eine zweifelsfreie Zuordnung des Ereignisses zu einer Person zu gewährleisten. Beispiele können das Senden von Nachrichten als Geschäftsleitung, die Überweisung hoher Beträge auf Konten im Ausland oder der Zugang einer Nachricht mit großer rechtlicher Bedeutung sein. Für einen zweifelsfreien Nachweis reicht die einfache Zuordnung zu einem Zugangskonto oft nicht aus, da das Konto auch von anderen missbraucht worden sein könnte. Zum Nachweis können verschiedene Maßnahmen eingesetzt werden: Digitale Signaturen auf Basis asymmetrischer Kryptographie können die Urheberschaft von Dokumenten verifizieren, während Zeitstempel von vertrauenswürdigen Zeitservern die chronologische Integrität sicherstellen. Eine dezentrale Speicherung der Logs auf verschiedenen Systemen erschwert Manipulationsversuche; ergänzend erhöht die Implementierung einer Blockchain-Technologie mit verketteten Hashwerten die Fälschungssicherheit erheblich. Hardwarebasierte Sicherheitsmodule (HSMs) können kryptografische Schlüssel vor unbefugtem Zugriff schützen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1d98ecfc-cf7a-4cf5-a108-169802a7b364 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 1d98ecfc-cf7a-4cf5-a108-169802a7b364 |
