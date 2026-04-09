---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.5 Publikation der Sendeberechtigung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.5 - Publikation der Sendeberechtigung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

> [!info]- Untergeordnete Controls
> [KONF.13.5.1 Strenge Senderpolicy](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.5.1%20Strenge%20Senderpolicy.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | die Publikation der eigenen Sendeberechtigung im DNS |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE die Publikation der eigenen Sendeberechtigung im DNS aktivieren.

> [!info]- Guidance
>Dies wird typischerweise über spezielle DNS-Einträge wie den Sender Policy Framework (SPF) realisiert. Damit kann eine Institution im DNS festlegen, welche Mail-Server berechtigt sind, E-Mails im Namen ihrer Domäne zu versenden. Ein entsprechender DNS-Eintrag, der sogenannte SPF-Record, ermöglicht es empfangenden Mail-Servern, die Absender-Adresse einer eingehenden E-Mail zu überprüfen. Dies kann die Schutzwirkung gegen gängige Risiken wie E-Mail-Spoofing verbessern, bei dem sich ein Angreifer als legitimer Absender ausgibt, um die Empfänger zu täuschen. Ohne eine solche Konfiguration könnte ein Angreifer beispielsweise E-Mails mit gefälschter Absenderadresse verschicken, die scheinbar von der Geschäftsleitung stammen, um einen Nutzer zur Herausgabe von sensiblen Informationen zu verleiten (Phishing). Durch die Aktivierung von SPF kann das Risiko verringert werden, dass solche bösartigen Nachrichten die Postfächer von Nutzern erreichen. Es ist wichtig, den Eintrag sorgfältig zu erstellen, um alle legitimen Absender abzudecken, einschließlich Diensten von Drittanbietern. Ein häufiger Fehler ist, dass nicht alle autorisierten Mail-Server korrekt gelistet sind, was dazu führen könnte, dass legitime E-Mails fälschlicherweise als Spam markiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4eedf96c-42cf-4d3e-902f-f3efce1f533a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4eedf96c-42cf-4d3e-902f-f3efce1f533a |
