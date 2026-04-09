---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.2 Authentizität von Nachrichten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.2 - Authentizität von Nachrichten
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

> [!info]- Untergeordnete Controls
> [KONF.13.2.1 Verifikation der Sendeberechtigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.2.1%20Verifikation%20der%20Sendeberechtigung.md)> [KONF.13.2.2 Verifikation der Serversignatur](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.13.2.2%20Verifikation%20der%20Serversignatur.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | Interpersonelle Kommunikation | SOLLTE | eine automatische Verifikation der Authentizität von Nachrichten |  | aktivieren | Konfigurationshistorie | >Konfiguration für Interpersonelle Kommunikation SOLLTE eine automatische Verifikation der Authentizität von Nachrichten aktivieren.

> [!info]- Guidance
>Die Authentizität von Nachrichten bezeichnet in diesem Zusammenhang die nachweisbare Echtheit und Unverfälschtheit einer digitalen Mitteilung im Rahmen der interpersonellen Kommunikation, also die Sicherheit, dass eine Nachricht tatsächlich von der angegebenen Quelle stammt und auf dem Übertragungsweg nicht manipuliert wurde. Im Fachjargon wird hier häufig von Message Authenticity oder auch von Origin Authentication gesprochen, wobei beide Begriffe eng mit kryptographischen Verfahren wie Digital Signatures oder Message Authentication Codes (MACs) verbunden sind. Der Sinn dieser Anforderung liegt darin, sicherzustellen, dass Angreifer keine falschen Identitäten vortäuschen oder den Inhalt von Nachrichten unbemerkt verändern können. Andernfalls könnte etwa eine gefälschte Anweisung in einem Chat zu Fehlhandlungen führen oder ein manipuliertes Dokument im E-Mail-Verkehr falsche Entscheidungen auslösen. Eine automatische Verifikation kann hingegen das Vertrauen in die Integrität und Herkunft der Kommunikation gewährleisten. Zur Umsetzung kann eine Institution beispielsweise digitale Signaturen einsetzen, die durch etablierte Standards wie S/MIME oder OpenPGP realisiert werden können, sodass E-Mail-Programme die Echtheit automatisch überprüfen. Auch der Einsatz von Ende-zu-Ende-Verschlüsselung mit eingebauter Authentizitätsprüfung, etwa bei Protokollen wie Signal Protocol oder TLS mit Client-Zertifikaten, kann eine geeignete Maßnahme sein. Darüber hinaus kann die Integration einer zentralen Public Key Infrastructure (PKI) oder die Nutzung verteilter Vertrauensmodelle (z. B. Web of Trust) sicherstellen, dass Schlüsselpaare zuverlässig verwaltet werden und Anwender ohne manuelle Prüfungen von Zertifikaten auskommen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 04eaf9de-736e-4dfc-898e-04dc85fa36f0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 04eaf9de-736e-4dfc-898e-04dc85fa36f0 |
