---
tags: Lieferketten
class: BSI-Stand-der-Technik-Kernel
type: control
control: BES.2.1.4.3 Kompatibilität des Administrationsmodells
parent_control: BES.2.1.4 Kompatibilität
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BES.2.1.4.3 - Kompatibilität des Administrationsmodells
Tags: "[Lieferketten](tags_Lieferketten)"
Gruppe: [BES.2 Bedarfserfassung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES.2%20Bedarfserfassung.md)
---

** Übergeordnetes Control: ** [BES.2.1.4 Kompatibilität](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BES.2.1.4%20Kompatibilität.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Beschaffungsmanagement (BES)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES%20Beschaffungsmanagement.md)**<br> ***  &rarr; [Bedarfserfassung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BES.2%20Bedarfserfassung.md) *** | Einkäufe | SOLLTE | den Bedarf für die Kompatibilität | im Hinblick auf das Administrationsmodell | dokumentieren | Beschaffungskriterien | >Beschaffungsmanagement für Einkäufe SOLLTE den Bedarf für die Kompatibilität im Hinblick auf das Administrationsmodell dokumentieren.

> [!info]- Guidance
>Unter „Kompatibilität im Hinblick auf das Administrationsmodell“ ist hier die technische und organisatorische Anschlussfähigkeit einer zu beschaffenden Lösung an das bestehende Berechtigungs- und Rollenmodell der Institution zu verstehen, also an die Struktur von Benutzerkonten, Rollen, Gruppen, Verantwortlichkeiten und administrativen Zuständigkeiten (z.B. Role-Based Access Control – RBAC, Attribute-Based Access Control – ABAC, Privileged Access Management – PAM). Das Administrationsmodell beschreibt dabei, wie Identitäten angelegt, geändert und gelöscht werden (Identity Lifecycle), wie Rechte vergeben und überprüft werden (Access Governance) und wie administrative Tätigkeiten nachvollziehbar protokolliert werden (Logging, Audit Trail). Die Dokumentation des Bedarfs für diese Kompatibilität bedeutet, dass im Beschaffungsprozess transparent festgehalten wird, welche Integrationsanforderungen bestehen, etwa hinsichtlich zentraler Verzeichnisdienste (z.B. LDAP, Active Directory), Single Sign-On (SSO), Multi-Faktor-Authentisierung (MFA), Mandantenfähigkeit oder der Trennung von administrativen und fachlichen Rollen. Der Zweck dieser Vorgabe liegt darin, Inkonsistenzen und Medienbrüche im Identitäts- und Berechtigungsmanagement zu vermeiden, da eine nicht kompatible Lösung zu Schattenadministration, doppelten Benutzerkonten oder unzureichender Trennung von Aufgaben führen könnte und dadurch unautorisierte Zugriffe oder fehlende Nachvollziehbarkeit begünstigt werden könnten. Eine frühzeitige und strukturierte Festlegung der Kompatibilitätsanforderungen kann hingegen eine einheitliche Durchsetzung von Sicherheitsrichtlinien, eine zentrale Steuerung privilegierter Konten und eine revisionssichere Protokollierung administrativer Handlungen unterstützen. die Unterstützung  sowie (3) die technische Möglichkeit zur rollenbasierten Delegation administrativer Rechte innerhalb der Anwendung umfassen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 962e52b2-54ab-4c5d-842d-fb3c3132e986 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 962e52b2-54ab-4c5d-842d-fb3c3132e986 |
