---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.5.1 Strenge Senderpolicy
parent_control: KONF.13.5 Publikation der Sendeberechtigung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.5.1 - Strenge Senderpolicy
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

** Übergeordnetes Control: ** [KONF.13.5 Publikation der Sendeberechtigung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.13.5%20Publikation%20der%20Sendeberechtigung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | eine strenge Senderpolicy |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE eine strenge Senderpolicy aktivieren.

> [!info]- Guidance
>Ein strenger Senderpolicy-Eintrag, auch "hard fail" (-all) genannt, weist empfangende Mailserver an, E-Mails, die von nicht autorisierten Servern stammen, zurückzuweisen oder als Spam zu markieren. Dies kann das Risiko von Phishing-Angriffen erheblich reduzieren, bei denen Angreifer versuchen, sich als vertrauenswürdige Institutionen auszugeben. Eine solche Konfiguration kann auch Spoofing verhindern, bei dem die Absenderadresse gefälscht wird, was dazu führen könnte, dass Kunden oder Mitarbeiter betrügerischen Anweisungen folgen, die scheinbar von der Institution selbst stammen. Zur Umsetzung einer strengen Senderpolicy kann die Institution sicherstellen, dass sie einen SPF-Eintrag in ihren DNS-Einstellungen hinterlegt. Dieser Eintrag sollte alle autorisierten Server explizit auflisten und mit dem "-all" Mechanismus enden, um eine strikte Ablehnung nicht konformer E-Mails zu signalisieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b44ec8f5-20f7-43ad-94a6-545a12cc7a67 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | b44ec8f5-20f7-43ad-94a6-545a12cc7a67 |
