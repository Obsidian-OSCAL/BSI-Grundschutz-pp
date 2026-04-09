---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.1.2 Interpretation aktiver Inhalte
parent_control: KONF.13.1 Filtern schädlicher Nachrichten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.1.2 - Interpretation aktiver Inhalte
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.1 Filtern schädlicher Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.1%20Filtern%20schädlicher%20Nachrichten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | Interpersonelle Kommunikation | SOLLTE | die automatische Interpretation aktiver Inhalte |  | deaktivieren | Konfigurationshistorie | >Konfiguration für Interpersonelle Kommunikation SOLLTE die automatische Interpretation aktiver Inhalte deaktivieren.

> [!info]- Guidance
>Unter aktiven Inhalten sind hier Elemente zu verstehen, die beim Empfang automatisch ausgeführt oder interpretiert werden könnten, wie z. B. eingebettete Skripte in E-Mails, dynamische Makros in Dokumenten oder der automatische Download von externen Bildern in Chat-Nachrichten. Hintergrund ist, dass eine empfangene Nachricht nicht nur reinen Text oder statische Informationen enthalten könnte, sondern zusätzliche versteckte Anweisungen, die beim Anzeigen sofort wirken. Ein typischer Vorfall könnte etwa sein, dass eine Mitarbeiterin eine HTML-E-Mail öffnet, die ein eingebettetes JavaScript enthält und dadurch unbemerkt Zugangsdaten abgegriffen werden. Durch Deaktivieren solcher Inhalte wird verhindert, dass Schadcode automatisch ausgeführt wird. Dies betrifft sowohl Inhalte in Freitext-Datenfeldern als auch an die Nachricht angehängte Dateien. Beispielsweise kann in Mail-Clients die Ausführung von Makros deaktiviert, die Darstellung externer Inhalte blockiert oder das Rendern von Skripten untersagt werden. Ebenso kann bei Messaging-Diensten die Anzeige von aktiven Inhalten durch Filter eingeschränkt werden, sodass nur reiner Text oder geprüfte Anhänge angezeigt werden. Ergänzend kann es hilfreich sein, benutzerseitige Tipps wie das standardmäßige Verwenden einer Nur-Text-Ansicht oder die klare Kennzeichnung von blockierten Inhalten zu etablieren. Institutionen können durch regelmäßige Konfigurationsprüfungen sicherstellen, dass Änderungen durch Updates oder neue Versionen die Deaktivierung nicht unbemerkt wieder aufheben.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ecc5b98d-eb77-4902-a01a-a5348ecba8f0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | ecc5b98d-eb77-4902-a01a-a5348ecba8f0 |
